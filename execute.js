(
  () => {

    //Event listener to the video element that will be triggered when the youtube video ends
    document.querySelector("video").addEventListener("ended", () => {
      //Get aria-label Next video element and click it
      document.querySelector("[aria-label='Next video']").click();
    });

    //Event listener to the video element that will check if element has loop attribute and remove it
    document.querySelector("video").addEventListener("timeupdate", () => {
      if (document.querySelector("video").hasAttribute("loop")) {
        document.querySelector("video").removeAttribute("loop");
      }
    });

  }

)();