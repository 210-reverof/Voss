import { useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useRecoilState } from 'recoil';
import { analysisRecordState } from '../../../recoil/Training';
import { 
  CompleteBtn,
  RecordBox, 
  RecordBtn, 
  RestartBtn, 
  SectionBtn, 
  StopWatch } from './RecordButton.style';

function RecordButton () {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number|null>(null);
  const [initialBtn, setInitialBtn] = useState(true)
  const [analysisRecord, setAnalysisRecord] = useRecoilState(analysisRecordState)
  const { 
    startRecording, 
    stopRecording, 
    clearBlobUrl,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl } = useReactMediaRecorder({ audio: true });

  const startOrStop = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    else if (isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
    setInitialBtn(false)
  }

  const resetTimer = () => {
      clearInterval(intervalRef.current);
      setInitialBtn(true)
      setIsRunning(false);
      setTime(0);
  };
  
  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  const addRecord = (mediaBlobUrl) => {
    setAnalysisRecord([mediaBlobUrl,...analysisRecord.slice(0,4)])
  }

  return(
    <RecordBox>
      <div id="waveform"></div>
      <StopWatch>{formatTime(time)}</StopWatch>
          <SectionBtn>
            { !initialBtn && !isRunning ?
            <RestartBtn
              onClick={() => {
                resetTimer()
                stopRecording()
                clearBlobUrl()}}>취소</RestartBtn> : ""}

            { initialBtn ? 
              (<RecordBtn
                onClick={() => {
                  startOrStop()
                  startRecording()}}
                src="/src/assets/Training/startbtn.png"></RecordBtn>) :
              isRunning ? 
                (<RecordBtn
                  onClick={() => {
                    startOrStop()
                    stopRecording()
                    pauseRecording()
                  }}
                  src="/src/assets/Training/stopbtn.png"></RecordBtn>) :
                (<RecordBtn
                  onClick={() => {
                    startOrStop()
                    resumeRecording()}}
                  src="/src/assets/Training/restartbtn.png"></RecordBtn>)
            }

            { !initialBtn && !isRunning ?
            <CompleteBtn
                onClick={() => {
                    stopRecording()
                    addRecord(mediaBlobUrl)
                    resetTimer()
                  }}>완료</CompleteBtn> : "" }
          </SectionBtn>
    </RecordBox>
  )
}
export default RecordButton