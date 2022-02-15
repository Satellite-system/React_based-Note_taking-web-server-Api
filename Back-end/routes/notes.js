const express = require("express");
const router = express.Router();
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

// ROUTE 1: Get all Notes of User using: GET "/api/notes/fetchallnotes", login Required
router.get("/fetchallnotes", fetchuser, async (req, rs) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    rs.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote", login Required
router.post(
  "/addnote",
  fetchuser,
  [
    //Incase of error/Invalid email message: Enter a valid email will be printed
    body("title", "Enter a valid Title").isLength({ min: 3 }), //title at least 3 chars long
    body("discription", "Discription must be atleast 6").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const { title, discription, tag } = req.body;
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        discription,
        tag,
        user: req.user.id,
      });

      const savedNotes = await note.save();

      res.json({ savedNotes });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update a Note of User using: PUT "/api/notes/updatenote", login Required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, discription, tag } = req.body;
  try {
    // Create a new note Object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (discription) {
      newNote.discription = discription;
    }
    if (title) {
      newNote.tag = tag;
    }

    // Find the Note and Update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      // If the selected note doesn't exists
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      // If current user and note trying to edit doesn't match
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Delete an Existing Note using: DELETE "/api/notes/deletenote", Login Required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the Note to be Deleted and Dele it
    let note = await Note.findById(req.params.id);
    if (!note) {
      // If the selected note doesn't exists
      return res.status(404).send("Not Found");
    }
    // Allow Deletion only if USer Owns it
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Suceess: "Note has been Deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;