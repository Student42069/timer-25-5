// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date().toLocaleString(),
//     };
//   }
//   componentDidMount() {
//     this.intervalID = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }
//   tick() {
//     this.setState({
//       time: new Date().toLocaleString(),
//     });
//   }
//   render() {
//     return <p className="App-clock">The time is {this.state.time}.</p>;
//   }
// }

// function tick() {
//   console.log("tick");
//   setDate({
//     date: new Date().toLocaleString(),
//   });
// }

// useEffect(() => {
//   const timerr = timer > 0 && setInterval(() => setTimer(timer - 1), 1000000);
//   return () => clearInterval(timerr);
// }, [timer]);

// function mar() {
//   let start = new Date().getTime();
//   setInterval(() => {
//     let now = new Date().getTime();
//     console.log(now - start);
//   }, 1000);
// }

////////////////////////////////////////////
// const [date, setDate] = useState(0);

// let ab;

// const bim = () => {
//   let now = new Date().getTime();
//   ab = setInterval(() => {
//     setDate(new Date().getTime() - now);
//     console.log(new Date().getTime() - now);
//   }, 1000);
// };

// useEffect(() => {
//   bim();
// }, []);
/////////////////////////////////////////////
