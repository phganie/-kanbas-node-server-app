import model from "./model.js";

export const findAssignmentByCourseId = (courseId) => model.find({ courseId });
export const createAssignment = (assignment) => {
    delete assignment._id;
    model.create(assignment);
}
export const findAssignmentById = (assignmentId) => model.findById(assignmentId);
export const updateAssignment = (assignmentId, assignment) => model.updateOne({ _id: assignmentId }, { $set: assignment });
export const deleteAssignment = (assignmentId) => model.deleteOne({ _id: assignmentId });
export const findAllAssignments = () => model.find();
export const findAssignmentByPartialName = (name) => {
    const regex = new RegExp(name, "i");
    return model.find({ name: { $regex: regex } });
}