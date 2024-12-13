import { useRef, useState } from 'react';
import './index.css'

function Welcome() {

  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Malli kuyave',
    songArtist: 'NEFFEX',
    songSrc: './Assets/songs/[iSongs.info] 05 - Malli Kuyave.mp3',
    songAvatar: './Assets/Images/Itlu Sravani Sudramanyam.png'
  })

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0)

  const currentAudio = useRef()

  const handleMusicProgressBar = (e)=>{
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  //Change Avatar Class
  let avatarClass = ['objectFitCover','objectFitContain','none']
  const [avatarClassIndex, setAvatarClassIndex] = useState(0)
  const handleAvatar = ()=>{
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0)
    }else{
      setAvatarClassIndex(avatarClassIndex + 1)
    }
  }


  //Play Audio Function
  const handleAudioPlay = ()=>{
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true)
    }else{
      currentAudio.current.pause();
      setIsAudioPlaying(false)
    }
  }

  const musicAPI = [
    {
      songName: 'Malli kuyave',
      songArtist: 'Hari Haran & Kousalya',
      songSrc: './Assets/songs/[iSongs.info] 05 - Malli Kuyave.mp3',
      songAvatar: './Assets/Images/Itlu Sravani Sudramanyam.png'
    },
    {
      songName: 'Nuvvunte',
      songArtist: 'Sagar & Sumangali',
      songSrc: './Assets/songs/Nuvvunte-SenSongsMp3.Com.mp3',
      songAvatar: './Assets/Images/Arya.png'
    },
    {
      songName: 'Enduko Emo',
      songArtist: 'Aalap Raju',
      songSrc: './Assets/songs/01 - Enduko Emo - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Rangam.png'
    },
    {
      songName: 'Chiru Chiru Chiru',
      songArtist: 'Yuvan Shankar',
      songSrc: './Assets/songs/1-Chiru Chiru Chiru-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Avara.png'
    },
    {
      songName: 'Chinnadana Neekosam',
      songArtist: 'Raja Hasan',
      songSrc: './Assets/songs/01 - Chinnadana Neekosam.mp3',
      songAvatar: './Assets/Images/Chinnadana Neekosam.png'
    },
    {
      songName: 'Saradaga',
      songArtist: 'Karthik & Sunidhi Chauhan',
      songSrc: './Assets/songs/02 - Saradaga - SenSongsMp3.co.mp3',
      songAvatar: './Assets/Images/Oye.png'
    },
    {
      songName: 'Vennelintha',
      songArtist: 'Arijit Singh',
      songSrc: './Assets/songs/02 - Vennelintha - SenSongsMp3.co.mp3',
      songAvatar: './Assets/Images/Tulasi.png'
    },
    {
      songName: 'Uppenantha',
      songArtist: 'Devi Sri Prasad',
      songSrc: './Assets/songs/2-Uppenantha-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Arya2.png'
    },
    {
      songName: 'Yela Yela',
      songArtist: 'Sunitha & Smitha',
      songSrc: './Assets/songs/03 - Yela Yela - SenSongsMp3.co.mp3',
      songAvatar: './Assets/Images/Ata.png'
    },
    {
      songName: 'Baby He Loves You',
      songArtist: 'Devi Sri Prasad',
      songSrc: './Assets/songs/3-Baby He Loves You-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Arya2.png'
    },
    {
      songName: 'Atu Nuvve Itu Nuvve',
      songArtist: 'Neha Bhasin',
      songSrc: './Assets/songs/05 - Atu Nuvve Itu Nuvve - SenSongsMp3.co.mp3',
      songAvatar: './Assets/Images/Current.png'
    },
    {
      songName: 'Niddura Pothunna',
      songArtist: 'Shankar Mahadevan',
      songSrc: './Assets/Images/Nuvve Nuvve.png',
      songAvatar: './Assets/Images/Nuvve Nuvve.png'
    },
    {
      songName: 'Karige Loga',
      songArtist: 'Devi Sri Prasad',
      songSrc: './Assets/songs/5-Karige Loga-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Arya2.png'
    },
    {
      songName: 'Nee Yadalo Naaku',
      songArtist: 'Yuvan Shankar Raja',
      songSrc: './Assets/songs/5-Nee Yadalo Naaku-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Avara.png'
    },
    {
      songName: 'Gongoora Thotakada',
      songArtist: 'Pushpavanam Kuppu',
      songSrc: './Assets/songs/06 - Gongoora Thotakada - SenSongsMp3.co.mp3',
      songAvatar: './Assets/Images/Venky.png'
    },
    {
      songName: 'Seheri',
      songArtist: 'Thoshi & Priya',
      songSrc: './Assets/songs/06 - Seheri - SenSongsMp3.co.mp3',
      songAvatar: './Assets/Images/Oye.png'
    },
    {
      songName: 'Aha Allari Allari',
      songArtist: 'Chitra & Raqeep Alam',
      songSrc: './Assets/songs/Aha Allari Allari-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Khadgam.png'
    },
    {
      songName: 'Apudo Ipudo',
      songArtist: 'Siddharth',
      songSrc: './Assets/songs/Apudo Ipudo-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Bommarillu.png'
    },
    {
      songName: 'Chali Chaliga',
      songArtist: 'Shreya Ghoshal',
      songSrc: './Assets/songs/Chali Chaliga-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Mr.Perfect.png'
    },
    {
      songName: 'Chirunavve',
      songArtist: 'Vijay Prakash',
      songSrc: './Assets/songs/Chirunavve - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Prema Kavali.png'
    },
    {
      songName: 'Chori Choriye',
      songArtist: 'Vijay Prakash & Anjana Sowmya',
      songSrc: './Assets/songs/Chori Choriye - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Lovely.png'
    },
    {
      songName: 'Gunde Jaari Gallanthayyinde',
      songArtist: 'Anup Rubens & Sravani',
      songSrc: './Assets/songs/Gunde Jaari Gallanthayyinde - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Gunde Jaari Gallanthayyinde.png'
    },
    {
      songName: 'Jennifer Lopez',
      songArtist: 'Benny Dayal & Priya',
      songSrc: './Assets/songs/Jennifer Lopez-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Jalsa.png'
    },
    {
      songName: 'Kopama Napina',
      songArtist: 'Karthik & Shreya Ghoshal',
      songSrc: './Assets/songs/Kopama Napina-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Varsham.png'
    },
    {
      songName: 'Listen To My Heart',
      songArtist: 'Anuj & Anjana Sowmya',
      songSrc: './Assets/songs/Listen To My Heart - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Prema Kavali.png'
    },
    {
      songName: 'Mee Intiki Mundhu',
      songArtist: 'Sagar & Ranina Reddy',
      songSrc: './Assets/songs/Mee Intiki Mundhu-SenSongsMp3.Com.mp3',
      songAvatar: './Assets/Images/Julai.png'
    },
    {
      songName: 'Muddabanthi',
      songArtist: 'Dhibu Ninan Thomas & Yazin Nizar',
      songSrc: './Assets/songs/Muddabanthi - SenSongsMp3.Com.mp3',
      songAvatar: './Assets/Images/Kousalya Krishnamurthy.png'
    },
    {
      songName: 'My Heart Is Beating (Remix)',
      songArtist: 'Kanika Kapoor',
      songSrc: './Assets/songs/My Heart Is Beating (Remix)-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Jalsa.png'
    },
    {
      songName: 'Nammaka Tappani',
      songArtist: 'Sagar',
      songSrc: './Assets/songs/Nammaka Tappani-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Bommarillu.png'
    },
    {
      songName: 'Neelakashamlo',
      songArtist: 'Shreya Ghoshal',
      songSrc: 'public/Assets/songs/Neelakashamlo - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Sukumarudu.png'
    },
    {
      songName: 'Nuvvosthanante',
      songArtist: 'Chitra & Raqeeb Alam',
      songSrc: './Assets/songs/Nuvvosthanante-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Varsham.png'
    },
    {
      songName: 'Nuvvu Nuvvu',
      songArtist: 'Sumangali',
      songSrc: './Assets/songs/Nuvvu Nuvvu-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Khadgam.png'
    },
    {
      songName: 'Pilichina',
      songArtist: 'Karthik & Kavitha Subramanyam',
      songSrc: './Assets/songs/Pilichina-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Atadu.png'
    },
    {
      songName: 'Pillagali',
      songArtist: 'Shreya Ghoshal',
      songSrc: './Assets/songs/Pillagali-SenSongsMp3.Co.mp3',
      songAvatar: './Assets/Images/Atadu.png'
    },
    {
      songName: 'Raa Chilaka',
      songArtist: 'G.V.Prakash Kumar',
      songSrc: './Assets/songs/Raa Chilaka - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Ongolugitha.png'
    },
    {
      songName: 'Sukumarudu',
      songArtist: 'Arijit Singh',
      songSrc: './Assets/songs/Sukumarudu - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Sukumarudu.png'
    },
    {
      songName: 'Yemito',
      songArtist: 'Radhan',
      songSrc: './Assets/songs/Yemito - SenSongsmp3.Co.mp3',
      songAvatar: './Assets/Images/Andala rakshasi.png'
    }
  ]

  const handleNextSong = ()=>{
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const handlePrevSong = ()=>{
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const updateCurrentMusicDetails = (number)=>{
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    })
    setIsAudioPlaying(true);
  }

  const handleAudioUpdate = ()=>{
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress)? 0 : progress)
  }


  const vidArray = ['./Assets/Videos/video1.mp4','./Assets/Videos/video2.mp4','./Assets/Videos/video3.mp4','./Assets/Videos/video4.mp4','./Assets/Videos/video5.mp4','./Assets/Videos/video6.mp4'];

  const handleChangeBackground = ()=>{
    if (videoIndex >= vidArray.length - 1) {
      setVideoIndex(0);
    }else{
      setVideoIndex(videoIndex + 1)
    }
  }


  return (
    <>
    <div className="container">
      <audio src='./Assets/songs/[iSongs.info] 05 - Malli Kuyave.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
      <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo'></video>
      <div className="blackScreen"></div>
      <div className="music-Container">
        <p className='musicPlayer'>Music Museum</p>
        <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
        <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
        <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
        <div className="musicTimerDiv">
          <p className='musicCurrentTime'>{musicCurrentTime}</p>
          <p className='musicTotalLenght'>{musicTotalLength}</p>
        </div>
        <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
        <div className="musicControlers">
          <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
          <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
          <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
        </div>
      </div>
      <div className="changeBackBtn" onClick={handleChangeBackground}>
        Change Background
      </div>
      <a href="https://www.youtube.com/@teenage-programmer" title='Subscribe' className='youtube-Subs'>
        <img src="./Assets/Images/logo.jpg" alt="Youtube Logo"/>
        <p>Music Museum</p>
      </a>
    </div>
    </>
  );
}

export default Welcome;
