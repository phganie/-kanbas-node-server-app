import * as dao from "./dao.js"; 

export default function AssignmentsRoutes(app) {
  const createAssignment = async (req, res) => {
    try {
      const { cid } = req.params;
      const newAssignment = { ...req.body, course: cid };
      const assignment = await dao.createAssignment(newAssignment);
      res.status(201).json(assignment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const deleteAssignment = async (req, res) => {
    try {
      const { aid } = req.params;
      const status = await dao.deleteAssignment(aid);
      res.json(status);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const findAssignmentsForCourse = async (req, res) => {
    try {
      const { cid } = req.params;
      const assignments = await dao.findAssignmentByCourseId(cid);
      res.json(assignments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const findAssignmentById = async (req, res) => {
    try {
      const { aid } = req.params;
      const assignment = await dao.findAssignmentById(aid);
      if (assignment) {
        res.json(assignment);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const updateAssignment = async (req, res) => {
    try {
      const { aid } = req.params;
      const status = await dao.updateAssignment(aid, req.body);
      res.json(status);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  app.post("/api/courses/:cid/assignments", createAssignment);
  app.get("/api/courses/:cid/assignments", findAssignmentsForCourse);
  app.get("/api/courses/:cid/assignments/:aid", findAssignmentById);
  app.put("/api/assignments/:aid", updateAssignment);
  app.delete("/api/assignments/:aid", deleteAssignment);
}
