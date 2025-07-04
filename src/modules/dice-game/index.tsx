'use client';

import {useState} from 'react';
import {GameResult} from '@/types';
import {Conditions} from '@/enums';
import {Notification, NotificationData} from '@/components/notification';
import {RadioGroup, ProgressBar, ButtonPlay, ResultsTable, NumberDisplay} from '@/components';
import {Stack} from '@mui/material';

export default function Index() {
  const [threshold, setThreshold] = useState<number>(20);
  const [condition, setCondition] = useState<Conditions>(Conditions.UNDER);
  const [gameResult, setGameResult] = useState<number | null>(null);
  const [gameHistory, setGameHistory] = useState<GameResult[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [notificationData, setNotificationData] = useState<NotificationData | null>(null);

  const playGame = () => {
    const result = Math.floor(Math.random() * 101);

    const win = condition === Conditions.OVER ? result > threshold : result < threshold;

    const newGameResult: GameResult = {
      id: Date.now(),
      time: new Date().toLocaleTimeString('en-GB', {hour12: false}),
      threshold,
      condition,
      result,
      isWin: win,
    };

    setGameHistory(prev => {
      const updated = [newGameResult, ...prev];
      return updated.slice(0, 10);
    });

    setGameResult(result);
    setOpen(true);
    setNotificationData({
      won: win,
      title: win ? 'You won' : 'You lost',
      description: win ? undefined : 'Number was higher',
    });
  };

  return (
    <div className="app">
      <Stack maxWidth={600} flex={1} pt={16} alignItems="center" m="0 auto">
        <Notification open={open} data={notificationData}/>
        <NumberDisplay gameResult={gameResult}/>
        <RadioGroup condition={condition} setCondition={setCondition}/>
        <ProgressBar threshold={threshold} setThreshold={setThreshold}/>
        <ButtonPlay playGame={playGame}/>
        <ResultsTable gameHistory={gameHistory}/>
      </Stack>
    </div>
  );
}