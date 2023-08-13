import { useRecoilState } from "recoil"
import { useEffect } from "react"
import { 
  dubbingRecordState, 
  dubbingRecordTimeState } from "/src/recoil/HW_Atom"
import { 
  Container, 
  DownloadImg, 
  RecordBox, 
  RecordItem, 
  RecordLable, 
  RecordSelect, 
  Title, 
  Warning} from "./Recording.style"

function Recording (){
  const [dubbingRecord] = useRecoilState(dubbingRecordState)
  const [timeList, setTimeList] = useRecoilState(dubbingRecordTimeState)
  
  const currentTime = () => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    const time = `${hours}-${minutes}-${seconds}`
    setTimeList([time,...timeList.slice(0,4)])
  }

  useEffect(()=>{
    currentTime()
  },[dubbingRecord])

  return(
    <Container>
      <Title>녹음 기록</Title>
      <RecordBox>
        {dubbingRecord.map((file,index) => (
          <RecordItem key={index}>
            <RecordSelect type="radio" name="record"/>
            <RecordLable>
            "voss"{timeList[index]}.mp3
            </RecordLable>
            <audio src={file} controls style={{
              width :'100px',
              height : '28px',
            }}/>
            <a href={file} download="my-audio-file.mp3">
              <DownloadImg src="/src/assets/Training/download.png"/>
            </a> 
          </RecordItem>
        ))}
      </RecordBox>
      <Warning>녹음 파일은 최대 5개까지 기록 가능합니다.</Warning>
    </Container>
  )
}

export default Recording