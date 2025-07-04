import {Conditions} from '@/enums';

export interface GameResult {
  id: number;
  time: string;
  threshold: number;
  condition: Conditions;
  result: number;
  isWin: boolean;
}