var KWYNN_COM_SOUND_2020_1 = false;

function play2020_1(toggle) {
      const path = 'https://kwynn.com/t/20/11/audio/';
      const name = 'ubuntu-20-04-1-desk-x64-95-seconds.wav';
	  if (toggle !== false) {
	      const sound = new Audio(path + name); 
		  KWYNN_COM_SOUND_2020_1 = sound;
	      sound.play();
		} else KWYNN_COM_SOUND_2020_1.pause();
}
