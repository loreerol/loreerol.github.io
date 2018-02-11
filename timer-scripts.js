article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:700;}dfn{font-style:italic;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace, serif;font-size:1em;}pre{white-space:pre-wrap;word-wrap:break-word;}q{quotes:\201C \201D \2018 \2019;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-.5em;}sub{bottom:-.25em;}img{border:0;}svg:not(:root){overflow:hidden;}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,html input[type=button],/* 1 */input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;}button[disabled],input[disabled]{cursor:default;}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0;}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}body,figure{margin:0;}legend,button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
.clearfix:after {visibility: hidden; display: block; font-size: 0; content: ''; clear: both; height: 0; }
* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

body, input {
	font-family: 'Roboto Mono', monospace;
}
.wrapper {
	background: lightslategrey;
	margin: 100px auto 0;
	padding: 50px;
	width: 50%;
	text-align: center;
}
h1, label, input {
	font-size: 50px;
	font-weight: bold;
}
button {
	font-size: 20px;
	border: none;
	background: white;
	padding: 10px 20px;
	text-align: center;
	transition: all 0.3s;
}
button:hover {
	background: #ccc;
}
button span {
	display: block;
	text-transform: uppercase;
	letter-spacing: 2.5px;
}
form.wrapper {
	margin: 0 auto;
	background: peachpuff;
}

input {
	width: 150px;
	border: 0;
	transition: background 0.3s, color 0.3s;
}

input[type=text].set {
	background: peachpuff;
}

input[type="submit"]:hover {
	background: lightslategray;
	color: white;
}

.submitted {
	color: grey;
}

@media (max-width: 700px) {
	.wrapper {
		width: 100%;
	}
}