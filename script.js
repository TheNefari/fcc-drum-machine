class DRUMMACHINE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clip: "",
      isPlaying: false,
      key: "" };

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMousePressed = this.onMousePressed.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.ended = this.ended.bind(this);
  }
  onKeyPressed(event) {
    let clipId = event.key.toUpperCase();
    this.player(clipId);
  }
  onKeyUp(event) {
    let clipId = event.key.toUpperCase();
    this.ended(clipId);
  }
  onClickHandler(event) {
    //let clipId = event.target.innerText;
    //this.player(clipId);
  }
  onMousePressed(event) {
    let clipId = event.target.innerText;
    this.player(clipId);
  }
  onMouseUp(event) {
    let clipId = event.target.innerText;
    this.ended(clipId);
  }
  player(clipId) {
    let clip2 = document.getElementById(this.state.clip);
    if (this.state.isPlaying) {
      clip2.pause();
      clip2.currentTime = 0;
    }

    let clip = document.getElementById(clipId);

    clip.play();
    this.setState({ clip: clipId, isPlaying: true, key: clip.title });
    this.playing(clipId);
  }
  playing(clipId) {
    $("#" + clipId).parent().css({ "background-color": "hsl(130,40%,30%)" });
  }
  ended(clipId) {
    $("#" + clipId).parent().css({ "background-color": "hsl(130,10%,90%)" });
  }
  componentDidMount() {
    window.addEventListener("keydown", this.onKeyPressed);
    window.addEventListener("keyup", this.onKeyUp);
    let buttons = document.getElementsByClassName("drum-pad");
    window.addEventListener("mousedown", this.onMousePressed);
    window.addEventListener("mouseup", this.onMouseUp);

  }

  render() {
    return (
      React.createElement("div", { id: "wrapper" },
      React.createElement("div", { id: "drum-machine", onKeyDown: this.onKeyPressed },
      React.createElement("div", { id: "pad-field" },
      React.createElement("button", { id: "button1", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Gotcha+bitch!+Sound+Effect+(-Got+you-)&filename=22/224470-9529e593-7aa8-4041-b714-18e2b1343cd0.mp3", id: "Q", class: "clip", title: "Gotcha" }), "Q"),

      React.createElement("button", { id: "button2", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=MLG+Horns+Sound+Effect&filename=22/224470-81e5802f-e44c-4a89-8eef-518ebd1f4424.mp3", id: "W", class: "clip", title: "Horn" }), "W"),

      React.createElement("button", { id: "button3", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Really+Nigga+Sound+Effect&filename=22/224470-ef2650d4-4b94-4435-ac5f-79bf2e44b34e.mp3", id: "E", class: "clip", title: "Really" }), "E"),

      React.createElement("button", { id: "button4", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Suprise+Motherf-cker+Sound+Effect&filename=22/224470-a2c4de5b-c03e-4a6f-a112-d6a0b9492c91.mp3", id: "A", class: "clip", title: "Suprise" }), "A"),

      React.createElement("button", { id: "button5", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=1069er+we+got+whores&filename=mj/MjIzMTEyOTcyMjMxMjI_4Q8ov5l4jf8.mp3", id: "S", class: "clip", title: "1069er" }), "S"),

      React.createElement("button", { id: "button6", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=I%27ve+got+balls+of+steel&filename=nt/NTYyMjExMTAzNTYyMjg4_XqoJirdnKMM.mp3", id: "D", class: "clip", title: "I got BoS" }), "D"),

      React.createElement("button", { id: "button7", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Balls+of+steel&filename=nd/NDgwNTExMTAzNDgwNTcw_F_2fn6gVelx88.mp3", id: "Z", class: "clip", title: "BoS" }), "Z"),

      React.createElement("button", { id: "button8", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Balls&filename=mt/MTA0NTExMTAzMTA0NTQ4_g2wol7gthU0.mp3", id: "X", class: "clip", title: "Balls" }), "X"),

      React.createElement("button", { id: "button9", class: "drum-pad", onClick: this.onClickHandler },
      React.createElement("audio", { src: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Steel&filename=nd/NDE4NDExMTAzNDE4NDM3_mr9GRQFlG9E.mp3", id: "C", class: "clip", title: "Steel" }), "C")),


      React.createElement("p", { id: "display" }, this.state.key)),

      React.createElement("p", { id: "creator" }, "made by Robert M\xFCller")));


  }}

ReactDOM.render(React.createElement(DRUMMACHINE, null), document.getElementById("App"));