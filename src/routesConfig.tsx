import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson05 from "./lessons/lesson05/Lesson05";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";

import Homework01 from "./homework/homework01/Homework01";
import Homework02 from "./homework/homework02/Homework02";
import Homework03 from "./homework/homework03/Homework03";
import Homework05 from "./homework/homework05/Homework05";
import Homework08 from "./homework/homework08/Homework08";
import Lesson12 from "./lessons/lesson12/Lesson12";
import FormGender from "./components/FormGender/FormGender";

export const lessons = [
    {path: 'lesson01', name :'Lesson 1', element:<Lesson01 />},
    {path: 'lesson02', name :'Lesson 2', element:<Lesson02 />},
    {path: 'lesson03', name :'Lesson 3', element:<Lesson03 />},
    {path: 'lesson04', name :'Lesson 4', element:<Lesson04 />},
    {path: 'lesson05', name :'Lesson 5', element:<Lesson05 />},
    {path: 'lesson06', name :'Lesson 6', element:<Lesson06 />},
    {path: 'lesson07', name :'Lesson 7', element:<Lesson07 />},
    {path: 'lesson08', name :'Lesson 8', element:<Lesson08 />},
    {path: 'lesson09', name :'Lesson 9', element:<Lesson09 />},
    {path: 'lesson010', name :'Lesson 10', element:<Lesson10 />},
    {path: 'lesson012', name :'Lesson 12', element:<Lesson12 />},
];

export const homework = [
    {path: 'homework01', name :'Homework 1', element:<Homework01 />},
    {path: 'homework02', name :'Homework 2', element:<Homework02 />},
    {path: 'homework03', name :'Homework 3', element:<Homework03 />},
    {path: 'homework05', name :'Homework 5', element:<Homework05 />},
    {path: 'homework08', name :'Homework 8', element:<Homework08 />},
    {path: 'FormGender', name :'Homework 9', element:<FormGender />},
];