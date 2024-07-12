import express from 'express';
import teachersCtrls from '../controllers/teachersCtrls/index.js';

const teachersRouter = express.Router();

// teachersRouter.get('/', teachersCtrls.getAllTeachers);

teachersRouter.get('/', teachersCtrls.getTeachersPage);

teachersRouter.get('/:id', teachersCtrls.getOneTeacher);

export default teachersRouter;
