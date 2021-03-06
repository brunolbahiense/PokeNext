import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: transparent;
  }
  @font-face{
	font-family:'pkm';
	src: url('./fonts/pkm.ttf');
}

  html{
    font-size: 62.5%;
  }

  html, body, #__next{
    height: 100%
  }

  body{
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }


  /* IMPORT FROM OLD */
  * {
    margin: 0;
    padding: 0;
    border: 0;
}
@font-face{
	font-family:'pkm';
	src: url('./fonts/pkm.ttf');
}
body {
	background: #EFEFBB;
	background: #2B2A2C;
	color: #fff;
	margin: 0;
	font-family: Arial, Helvetica, sans-serif;
}

header{
	background: #d53b47;
}

.footer{
	background: #d53b47;
	margin: 0;
	padding: 10px;
	text-align: center;
	font-size: 20px;
}

.smartbit{
	border-radius: 100%;
	height: 20px;
	width: 20px;
}

.container {
	padding: 40px;
	margin: 0 auto;
}

h1 {
	margin: 0;
	padding: 10px;
	text-align: center;
	font-size: 54px;
	font-family: 'pkm';
}

.pokedex {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	grid-gap: 20px;
	padding-inline-start: 0;
}

.card {
	list-style: none;
	padding: 40px;
	color: #222;
	text-align: center;
	border-radius: 20px;
	position: relative;
	cursor: pointer;
}

.card::after {
	content: "";
  display: block;
  width: 50%;
  height: 45%;
  border-radius: 100%;
  background-color: #fff;
  opacity: .7;
  position: absolute;
  top: 15%;
  left: 25%;
}

.steel {
	background-color: #f4f4f4;
}

.fire {
	background-color: #D7705F;
	;
}

.grass {
	background-color: #67A88F;
}

.electric {
	background-color: #f0d330;
}

.water, .ice {
	background-color: #50B0D8;
}

.rock {
	background-color: #966f47;
}

.ground {
	background-color: #c2af47;
}

.fairy {
	background-color: #eda1d0;
}

.poison {
	background-color: #8f40b4;
}

.bug {
	background-color: #f8d5a3;
}

.dragon {
	background-color: #97b3e6;
}

.psychic {
	background-color: #997996;
}

.flying {
	background-color: #5fcccf;
}

.fighting {
	background-color: #ee9541;
}

.normal {
	background-color: #979797;
}

.ghost {
	background: #9EAFD0;
}

.dark {
	background: #000;
}
.card:hover {
	animation: bounce 0.5s linear;
}

.card-title {
	color: #fff;
	text-transform: capitalize;
	margin-bottom: 0px;
	font-size: 32px;
	font-weight: normal;
	position: relative;
	z-index: 2;
}

.card-image {
	height: 180px;
	position: relative;
	z-index: 2;
}

@keyframes bounce {
	20% {
			transform: translateY(-6px);
	}
	40% {
			transform: translateY(0px);
	}

	80% {
			transform: translateY(-2px);
	}
	100% {
			transform: translateY(0);
	}
}
`

export default GlobalStyles
