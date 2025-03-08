import { Exercise } from "./exercise";
import { Set } from "./set";
import { User } from "./user";

export interface Workout {
  id: number;
  name: string;
  date: string;
  user: User;
  execises: {
    exercise: Exercise;
    sets: Set[];
  }[];
}
