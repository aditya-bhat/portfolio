(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(7),r=a.n(o),s=(a(96),a(22)),l=a(8),c=a(73),m=a(57),d=a(159),u=a(144),p=a(49),h=a(146),g=Object(u.a)((function(e){return{button:{color:"white",textDecoration:"none","&:hover":{color:"lightskyblue"}},faButton:{color:"white",padding:"5px 5px",fontSize:"30px","&:hover":{color:"lightskyblue"}}}})),f=function(e){var t=Object(n.useState)({backgroundColor:"#343a40",minHeight:"25vh",color:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",fontSize:"18px"}),a=Object(s.a)(t,1)[0],o=e.name,r=e.link,u=e.social_links,f=e.message,b=g();return i.a.createElement("footer",{style:a,className:"footer"},i.a.createElement("div",null,i.a.createElement(m.a,{style:{paddingTop:"10%",paddingBottom:"10%"},variant:"h4"}," ","Get in Touch!")),i.a.createElement("div",null,i.a.createElement(m.a,{style:{paddingInline:"10%"}},f," Please feel free to email me at:"," ",i.a.createElement("a",{className:b.button,rel:"noopener",href:u.email,"aria-label":"My Email"},u.email.replace("mailto:","")))),i.a.createElement("div",{style:{paddingTop:"20px"}},i.a.createElement(c.a,{className:"react-icons"})," ","Copyright 2020"),i.a.createElement("div",null,i.a.createElement(l.c,{size:25,className:"react-icons"}),"by"," ",i.a.createElement("a",{className:b.button,rel:"noopener",href:r,"aria-label":"My GitHub"},i.a.createElement("b",null,o))," ","using ",i.a.createElement(l.h,{size:25,className:"react-icons"})," ",i.a.createElement(d.a,null,i.a.createElement(h.a,{href:u.email,size:"small"},i.a.createElement(p.a,{className:b.faButton})),i.a.createElement(h.a,{href:u.github,size:"small"},i.a.createElement(l.d,{href:"#",className:b.faButton})),i.a.createElement(h.a,{href:u.linkedin,size:"small"},i.a.createElement(l.g,{className:b.faButton})),i.a.createElement(h.a,{href:u.instagram,size:"small"},i.a.createElement(l.e,{className:b.faButton})))))},b=a(150),y=a(151),E=a(149),v=a(28),k=a(148),w=a(6),x=a(32),S=a(33),N=a(50),A=a(34),C=a(35),D=a(160),T=a(51),P=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).handleMenu=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.state={anchorEl:null},n.handleMenu=n.handleMenu.bind(Object(N.a)(n)),n}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state.anchorEl,a=Boolean(t);return i.a.createElement("div",{className:e.buttonCollapse},i.a.createElement(h.a,{onClick:this.handleMenu},i.a.createElement(T.a,{className:e.menuicon})),i.a.createElement(D.a,{id:"menu-appbar",anchorEl:t,open:a,onClose:this.handleClose,style:{display:"flex",flexDirection:"column"}},this.props.children))}}]),a}(i.a.Component),j=Object(w.a)((function(e){var t;return{buttonCollapse:(t={},Object(v.a)(t,e.breakpoints.up("sm"),{display:"none"}),Object(v.a)(t,"boxShadow","none"),t),menuicon:{color:"white"}}}))(P),B=function(e){var t=document.getElementById(e).offsetTop;window.scrollTo({top:t-40,behavior:"smooth"})},M=Object(w.a)((function(e){var t;return{root:{position:"absolute",right:0},buttonBar:(t={},Object(v.a)(t,e.breakpoints.down("xs"),{display:"none"}),Object(v.a)(t,"position","relative"),Object(v.a)(t,"width","100%"),Object(v.a)(t,"background","transparent"),t),Button:{marginLeft:"10px",fontWeight:"bold",color:"white"}}}))((function(e){return i.a.createElement("div",{className:e.classes.root},i.a.createElement(j,null,i.a.createElement(k.a,{onClick:function(){B("about")}},"About"),i.a.createElement(k.a,{onClick:function(){B("skills")}},"Skills"),i.a.createElement(k.a,{onClick:function(){B("experience")}},"Experience"),i.a.createElement(k.a,{onClick:function(){B("education")}},"Education"),i.a.createElement(k.a,{onClick:function(){B("project")}},"Projects"),i.a.createElement(k.a,{onClick:function(){B("publication")}},"Publications")),i.a.createElement("div",{className:e.classes.buttonBar,id:"appbar-collapse"},i.a.createElement(E.a,{className:e.classes.Button,onClick:function(){B("about")}},"About"),i.a.createElement(E.a,{className:e.classes.Button,onClick:function(){B("experience")}},"Experience"),i.a.createElement(E.a,{className:e.classes.Button,onClick:function(){B("project")}},"Projects"),i.a.createElement(E.a,{className:e.classes.Button,onClick:function(){B("publication")}},"Publications")))})),O=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},AppBar:{boxShadow:"none",backgroundColor:"transparent"},AppBarScroll:{boxShadow:"none",backgroundColor:"#343a40!important"},Typography:{fontWeight:"700",fontFamily:"AgustinaRegular"},Button:{fontWeight:"bold",color:"white"}}}));function I(){var e=O(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){return window.scrollY>100?r(!0):r(!1),function(){window.removeEventListener("scroll")}}))})),i.a.createElement("div",{className:e.root},i.a.createElement(b.a,{id:"navbar",className:"".concat(e.AppBar," ").concat(o&&e.AppBarScroll),position:"fixed"},i.a.createElement(y.a,{variant:"dense"},i.a.createElement(E.a,{className:e.Button},i.a.createElement("span",null,"</"),i.a.createElement("span",{className:"logo",onClick:function(){!function(e){var t=document.getElementById(e).offsetTop;window.scrollTo({top:t-40,behavior:"smooth"})}("home")}},"Aditya"),i.a.createElement("span",null,">"))),i.a.createElement(M,null)))}var L=Object(u.a)((function(e){return{root:{flexGrow:1,minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},Typography:{fontWeight:"300",lineHeight:1.2,color:"white",fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",margin:0,padding:"0px 0px 6px 0px"},paper:{height:140,width:100},button:{color:"white",border:"1px solid white",padding:"14px 28px",fontSize:"16px",cursor:"pointer","&:hover":{color:"black",border:"1px solid black"}},faButton:{color:"white",padding:"5px 5px",fontSize:"40px","&:hover":{color:"black"}}}})),F=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};F.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span className="wrap">'+this.txt+"</span>";var a=this,n=200-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=400):(n=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),n)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var a=e[t].getAttribute("data-rotate"),n=e[t].getAttribute("data-period");a&&new F(e[t],JSON.parse(a),n)}};var R=function(e){var t=L();console.log("Props - Home.js",e.about);var a=e.about;return i.a.createElement(d.a,{id:"home"},i.a.createElement(d.a,{className:t.root},i.a.createElement(m.a,{className:t.Typography,variant:"h1"},a.name),i.a.createElement(m.a,{className:t.Typography,variant:"h4"},a.role," @",a.currentCompany),i.a.createElement(m.a,{className:t.Typography,variant:"h4"},i.a.createElement("span",{style:{visibility:"hidden"}},"!"),i.a.createElement("span",{className:"txt-rotate","data-period":"1000","data-rotate":a.aboutDataRotate})),i.a.createElement(d.a,null,i.a.createElement(h.a,{href:a.socialLinks.email,size:"medium"},i.a.createElement(p.a,{className:t.faButton})),i.a.createElement(h.a,{href:a.socialLinks.github,size:"medium"},i.a.createElement(l.d,{href:"#",className:t.faButton})),i.a.createElement(h.a,{href:a.socialLinks.linkedin,size:"medium"},i.a.createElement(l.g,{className:t.faButton})),i.a.createElement(h.a,{href:a.socialLinks.instagram,size:"medium"},i.a.createElement(l.e,{className:t.faButton}))),i.a.createElement(d.a,null,i.a.createElement(E.a,{variant:"outlined",size:"large",className:t.button,onClick:function(){!function(e){var t=document.getElementById(e).offsetTop;window.scrollTo({top:t-40,behavior:"smooth"})}("about")},startIcon:i.a.createElement(l.a,null)},"More About Me!"))))},z=a(29),K=(a(69),Object(u.a)((function(e){return{root:{flexGrow:1,background:"linear-gradient(to right, #D7DDE8, #757F9A)"},paper:{padding:"10px",margin:"10px"},Typography:{color:"white",fontFamily:"Trocchi"}}}))),W=function(e){var t=K(),a=e.education;return i.a.createElement(d.a,{className:t.root,id:"education"},i.a.createElement(m.a,{variant:"h2",className:t.Typography},"Education"),i.a.createElement(z.VerticalTimeline,{layout:"2-columns",animate:!1},a.map((function(e,t){return i.a.createElement(z.VerticalTimelineElement,{key:t,className:"vertical-timeline-element--education",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:i.a.createElement(l.i,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},e.Degree),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.specialization+", "+e.UniversityName),i.a.createElement("p",null,e.Description),i.a.createElement("b",{className:"vertical-timeline-element-date",style:{fontWeight:700}},e.Duration))})),i.a.createElement(z.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:i.a.createElement(T.b,null)})))},H=a(54),_=a(161),U=a(152),J=a(56),V=a(76),q=a(147),G=a(117),Y=a(153),Q=a(154);Object(V.a)({MuiTableCell:{padding:"0px"}}),Object(w.a)((function(e){return{root:{color:e.palette.getContrastText(J.a[300]),backgroundColor:J.a[300],"&:hover":{backgroundColor:J.a[700]}}}}))(E.a);var X=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(S.a)(a,[{key:"render",value:function(){console.log("info ",this.props);var e=this.props.classes;return i.a.createElement(_.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.props.open,onClose:this.props.handleClose},i.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:e.paper},i.a.createElement(d.a,{style:{height:"60vh",overflowY:"scroll"}},i.a.createElement(m.a,{component:"div",style:{textAlign:"center",alignSelf:"center"}},i.a.createElement(d.a,{fontWeight:"fontWeightBold",m:1},this.props.data.Designation),i.a.createElement(d.a,{fontWeight:"fontWeightBold",m:1},this.props.data.CompanyName+" - "+this.props.data.UnitName)),i.a.createElement(U.a,{variant:"middle"}),i.a.createElement(m.a,null,this.props.data.Description),i.a.createElement(q.a,{component:"nav","aria-labelledby":"nested-list-subheader"},this.props.data.Points?this.props.data.Points.map((function(e,t){return i.a.createElement(G.a,{key:t,button:!0},i.a.createElement(Y.a,null,i.a.createElement(l.b,null)),i.a.createElement(Q.a,{primary:e}))})):""))))}}]),a}(n.Component),Z=Object(w.a)((function(e){return{paper:{position:"absolute",width:window.innerWidth<600?"90%":"50%",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2),borderRadius:10,outline:"none"}}}))(X),$=Object(u.a)((function(e){return{root:{flexGrow:1,background:"#303f4a",paddingBottom:"0px !important",maxWidth:"none"},paper:{padding:"10px",margin:"10px"},Typography:{color:"white",fontFamily:"Trocchi"}}})),ee=function(e){var t=$(),a=e.experience,n=i.a.useState(!1),o=Object(s.a)(n,2),r=o[0],c=o[1],u=i.a.useState({}),p=Object(s.a)(u,2),h=p[0],g=p[1];return i.a.createElement(d.a,{className:t.root,id:"experience"},i.a.createElement(Z,{data:h,open:r,handleClose:function(){c(!1)}}),i.a.createElement(m.a,{variant:"h2",className:t.Typography},"Experience"),i.a.createElement(z.VerticalTimeline,{layout:"2-columns",animate:!1},a.map((function(e,t){return i.a.createElement(z.VerticalTimelineElement,{key:t,className:"vertical-timeline-element--work",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:i.a.createElement(H.b,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},e.Designation),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.CompanyName+" - "+e.UnitName),i.a.createElement("p",null,e.Description),i.a.createElement("b",{className:"vertical-timeline-element-date",style:{color:"#3282FA",fontWeight:700}},e.From+" - "+e.To),i.a.createElement(E.a,{onClick:function(){g(e),c(!0)},target:"_blank",size:"small",variant:"outlined",color:"primary"},"More INFO"))})),i.a.createElement(z.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:i.a.createElement(l.f,null)})))},te=(a(4),a(162)),ae=a(74),ne=a.n(ae),ie=Object(u.a)((function(e){return{root:{background:"#e9ecef",padding:"10px",margin:"0px",maxWidth:"85%"},Typography:{fontFamily:"Trocchi",alignSelf:"left"}}})),oe=function(e){var t=ie();return i.a.createElement(d.a,{className:t.root,id:"skills"},i.a.createElement(m.a,{variant:"h4",className:t.Typography},"Skills:"),i.a.createElement("ul",null,e.skills.map((function(e){return i.a.createElement("li",null,e)}))))},re=a(30),se=Object(u.a)((function(e){return{root:{flexGrow:1,background:"#e9ecef",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"10px"},paper:{padding:"10px",margin:"10px"},button:{color:"black",border:"1px solid black",padding:"14px 28px",fontSize:"16px",cursor:"pointer",margin:"10px"},Avatar:{height:"35vh",width:"35vh",float:"left",margin:"5px"}}})),le=function(e){var t=se(),a=e.about.aboutme,n=e.about.interests,o=e.about.skills,r=e.about.resume_file_location;return i.a.createElement(d.a,{className:t.root,id:"about"},i.a.createElement(te.a,{className:t.Avatar,alt:e.about.name,src:ne.a}),i.a.createElement(m.a,{style:{margin:"10px",maxWidth:"85%",padding:"10px"},variant:"h6",color:"textSecondary",component:"p"},a),i.a.createElement(m.a,{style:{maxWidth:"85%"},variant:"h6",color:"textSecondary",component:"p"},i.a.createElement("b",null," Interests: ",n)),i.a.createElement(oe,{skills:o}),i.a.createElement(re.b,{style:{textDecoration:"none",color:"black"},to:r,target:"_blank",download:!0},i.a.createElement(E.a,{variant:"outlined",size:"large",className:t.button,startIcon:i.a.createElement(H.a,null)},"My Resume!")))},ce=a(78),me=a(155),de=Object(u.a)((function(e){return{root:{flexGrow:1,background:"#e9ecef"},paper:{padding:"10px",background:"#e9ecef"},actions:{display:"flex",justifyContent:"center"},card:{minHeight:"75vh",maxHeight:"75vh",overflowY:"scroll"}}})),ue=function(e){var t=de(),a=e.publication;return i.a.createElement(d.a,{id:"publication"},i.a.createElement(ce.a,{className:t.paper,elevation:0},i.a.createElement(m.a,{variant:"h2",style:{fontFamily:"Trocchi"}},"Publications:"),i.a.createElement(me.a,{container:!0,justify:"left",spacing:2},a.map((function(e){return i.a.createElement(me.a,{style:{marginInline:"10%"},item:!0,xs:12,key:e.id},i.a.createElement(q.a,{style:{textAlign:"left",width:"100%",padding:"0px"}},i.a.createElement(G.a,{style:{margin:"0px",padding:"0px"}},i.a.createElement(Q.a,{primary:i.a.createElement(m.a,{variant:"h6",style:{padding:"0px",fontFamily:"Lato"}},e.title),secondary:i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{component:"span",variant:"body2",color:"textPrimary"},e.publisher)," -    "+e.authors.join(", "))})),i.a.createElement(E.a,{variant:"contained",color:"primary",target:"_blank",href:e.url,size:"small",style:{marginLeft:"15px",marginBottom:"5px"}},"Details"),e.file_location&&""!==e.file_location?i.a.createElement(re.b,{style:{textDecoration:"none",color:"white"},to:e.file_location,target:"_blank",download:!0},i.a.createElement(E.a,{variant:"contained",color:"primary",size:"small",style:{marginLeft:"5px",marginBottom:"5px"}},"PDF")):"",i.a.createElement(U.a,{component:"li"})))})))))},pe=a(157),he=a(156),ge=a(158),fe=Object(u.a)((function(e){return{root:{width:"100%",margin:"0px"},Typography:{fontFamily:"Trocchi",alignSelf:"left"}}})),be=function(e){var t=e.tech,a=fe();return i.a.createElement(d.a,{className:a.root,id:"skills"},i.a.createElement("ul",{style:{padding:"0px"}},t.map((function(e){return i.a.createElement(E.a,{style:{margin:"5px",backgroundColor:"#343a40",color:"white"},variant:"contained",color:"primary",size:"small",disabled:!0},e)}))))};Object(V.a)({MuiTableCell:{padding:"0px"}}),Object(w.a)((function(e){return{root:{color:e.palette.getContrastText(J.a[300]),backgroundColor:J.a[300],"&:hover":{backgroundColor:J.a[700]}}}}))(E.a);var ye=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(S.a)(a,[{key:"render",value:function(){console.log("info ",this.props);var e=this.props.classes;return i.a.createElement(_.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.props.open,onClose:this.props.handleClose},i.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:e.paper},i.a.createElement(d.a,{style:{height:"50vh",overflowY:"scroll"}},i.a.createElement(m.a,{component:"div",style:{textAlign:"center",alignSelf:"center"}},i.a.createElement(d.a,{fontWeight:"fontWeightBold",m:1},this.props.data.title)),i.a.createElement(U.a,{variant:"middle"}),i.a.createElement(m.a,null,this.props.data.abstract),i.a.createElement(q.a,{component:"nav","aria-labelledby":"nested-list-subheader"},this.props.data.Points?this.props.data.Points.map((function(e,t){return i.a.createElement(G.a,{key:t,button:!0},i.a.createElement(Y.a,null,i.a.createElement(l.b,null)),i.a.createElement(Q.a,{primary:e}))})):""),i.a.createElement(me.a,{container:!0,justify:"center"},i.a.createElement(he.a,{display:"flex",justifyContent:"center"},""!=this.props.data.url?i.a.createElement(h.a,{target:"_blank",href:this.props.data.url,size:"medium"},i.a.createElement(l.d,{href:"#",color:"black",padding:"5px 5px",fontSize:"40px"})):"")))))}}]),a}(n.Component),Ee=Object(w.a)((function(e){return{paper:{position:"absolute",width:window.innerWidth<600?"90%":"40%",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2),borderRadius:10,outline:"none"}}}))(ye),ve=Object(u.a)((function(e){return{root:{flexGrow:1,background:"linear-gradient(to right, #D7DDE8, #757F9A)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},paper:{padding:"10px",background:"linear-gradient(to right, #D7DDE8, #757F9A)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},actions:{display:"flex",justifyContent:"center"},card:{minHeight:"30vh"}}})),ke=function(e){var t=ve(),a=e.project,n=i.a.useState(!1),o=Object(s.a)(n,2),r=o[0],c=o[1],u=i.a.useState({}),p=Object(s.a)(u,2),g=p[0],f=p[1];return i.a.createElement(d.a,{className:t.root,id:"project"},i.a.createElement(ce.a,{className:t.paper,elevation:0},i.a.createElement(Ee,{data:g,open:r,handleClose:function(){c(!1)}}),i.a.createElement(m.a,{variant:"h2",style:{color:"white",paddingBottom:"10px",fontFamily:"Trocchi"}},"Projects:"),i.a.createElement(me.a,{container:!0,justify:"center",spacing:2,alignItems:"stretch"},a.map((function(e){return i.a.createElement(me.a,{item:!0,xs:12,sm:6,md:6,lg:4,xl:3,justify:"center",style:{height:"100%"},key:e.id},i.a.createElement(d.a,{style:{height:"100%"},key:e.id},i.a.createElement(pe.a,{className:t.card},i.a.createElement(ge.a,null,i.a.createElement(m.a,{variant:"h6",style:{fontWeight:700,fontStyle:"italic",fontSize:"large",marginTop:"5px",marginBottom:"5px"}},e.title),i.a.createElement(be,{tech:e.tech})),i.a.createElement(he.a,{className:t.actions},i.a.createElement(E.a,{onClick:function(){f(e),c(!0)},target:"_blank",size:"small",variant:"outlined",color:"primary",style:{}},"More INFO"),""!=e.url?i.a.createElement(h.a,{target:"_blank",href:e.url,size:"medium"},i.a.createElement(l.d,{href:"#",color:"black",padding:"5px 5px",fontSize:"40px"})):""))))})))))},we=Object(u.a)((function(e){return{root:{flexGrow:1},Typography:{fontWeight:300,lineHeight:1.2,color:"white"}}})),xe=function(e){var t=we();return console.log("Resume Data",e.portfolioData),i.a.createElement(d.a,{className:t.root},i.a.createElement(R,{about:e.portfolioData.about}),i.a.createElement(le,{about:e.portfolioData.about}),i.a.createElement(ee,{experience:e.portfolioData.experience}),i.a.createElement(W,{education:e.portfolioData.education}),i.a.createElement(ke,{project:e.portfolioData.project}),i.a.createElement(ue,{publication:e.portfolioData.publication}))},Se=a(75),Ne=a.n(Se),Ae=(a(113),{about:{imagebaseurl:"https://aditya-bhat.github.io/",resume_file_location:"/files/AdityaDeepakBhat_Resume.pdf",name:"Aditya D Bhat",role:"R & D Engineer",currentCompany:"Hewlett Packard Enterprise",socialLinks:{email:"mailto:aditya.deepak.bhat@gmail.com",linkedin:"https://www.linkedin.com/in/aditya-bhat/",github:"http://github.com/aditya-bhat",instagram:"https://instagram.com/aditya_bhat24"},aboutDataRotate:'["Data Enthusiast.", "Machine Learning!", "Web Developer"]',aboutme:"Data Science and Machine Learning Enthusiast, with a Bachelor of       Technology (B.Tech) in Computer Science and Engineering and a      specialization in Data Science from PES University, Bangalore. Currently      working as a Research and Development Engineer at Aruba, Hewlett Packard      Enterprise R&D. Building Intelligent Applications that improve      engineering productivity and Automation.",address:"Bangalore, India",website:"https://aditya-bhat.github.io",interests:"NLP, Machine Learning, Data Mining, Web Technologies",getInTouchMessage:"I'm open to opportunities in the area of Machine Learning and NLP! ",skills:["C/C++","Python","JavaScript","Node.js","ReactJS","MongoDB","Express","SQL/PostgreSQL","Apache Spark","Apache Kafka","Numpy","Pandas","Seaborn/Matplotlib","TensorFlow","Keras","OpenCV","scaPy","Librosa"]},education:[{UniversityName:"PES University",Degree:"Bachelor of Technology (B. Tech)",specialization:"Computer Science and Engineering - Specialization in Data Science",Duration:"2015-2019",Description:"Electives: Data Analytics, Big Data, Natural Language Processing, Digital Image Processing, Social Network Analytics, Blockchain",Achievements:["Some Achievements"]}],experience:[{CompanyName:"Hewlett Packard Enterprise",Designation:"Research and Development Engineer",UnitName:"Aruba Networks, HPE R&D",From:"July 2019",To:"Present",Description:"Web Development, Data Mining, Automation",Points:["Independently working on Tool Development and Data Mining to build intelligent applications that help improve engineering productivity. Created a dataset to characterize over 1200+ Network Stress Test Cases and developed a Smart Triage and Test Execution Tool - reducing manual effort of the Triage Team by 50%.","Developed the Aruba Bangalore Lab Reservation Tool working alongside a teammate. Features include Network Auto-Discovery, Inventory Control, Utilization Analytics and Stats, remote authentication using LDAP, etc. Tech Stack: Python, ReactJS, NodeJS MongoDB, scikit-learn.","Worked with a team of two members to build a Health Monitor for Aruba Switch Builds. Also, mentoring five Interns at Aruba Networks, HPE."],Achievements:["Some Achievements1","Some Achievements 2"]},{CompanyName:"Hewlett Packard Enterprise",Designation:"Research and Development Intern",UnitName:"Aruba Networks, HPE R&D",From:"Jan 2019",To:"July 2019",Description:"Web Development, Data Mining, Automation",Points:["Worked on Automation of Network Switching Protocols such as OSPF, ARP, MAC, etc. Built a library to automate reporting of ARP Scale Characterization, reducing the manual effort that goes into generating it."],Achievements:["Some Achievements1","Some Achievements 2"]},{CompanyName:"PES University",Designation:"Research Intern",UnitName:"Center for Cloud Computing and Big Data",From:"Sep 2017",To:"Jan 2019",Description:"Applied Machine Learning, Deep Learning, Automatic Speech Recognition",Points:["PES University, Bangalore. Worked on applied Deep Learning in Automatic Speech Recognition for the language Kannada. Focused on syllable segmentation, mispronunciation detection using Self-Organizing Maps and rating the word pronunciation using deep learning architectures."],Achievements:["Some Achievements1","Some Achievements 2"]},{CompanyName:"PES University",Designation:"Research Intern",UnitName:"Center for Pattern Recognition and Machine Intelligence",From:"Sep 2017",To:"Jan 2019",Description:"Applied Machine Learning, Pattern Recognition",Points:["PES University, Bangalore.Worked on projects on Face Recognition under guidance Prof. Vinay A, funded by the Govt. of Karnataka. Explored Classi\fcation using SVM, Random Forests, Gradient Boosting, and ResNet."],Achievements:["Some Achievements1","Some Achievements 2"]},{CompanyName:"Pattern Effects Labs",Designation:"Machine Learning Intern",UnitName:"ML Team",From:"May 2018",To:"Aug 2018",Description:"Machine/Deep Learning, Data Analysis, Back-testing",Points:["Looked into helpful technical indicators that can help predict buy/sell actions on the NIFTY Index.","Analyzing the distribution of data, and coming up with a suitable objective function to maximize profit under certain conditions.","Training Machine Learning Models like SVM, RF, XGBoost, KNN, and Ensembles of Classifiers, based on custom metrics to gauge the success of a model.","Training and hyper-parameter Neural Networks based models using TensorFlow and Keras.","Backtesting the models on multiple folds of historical data, to estimate the overall profit of the models over a window of time."],Achievements:["Some Achievements1","Some Achievements 2"]}],project:[{id:8,title:"Data Modeling with Cassandra",abstract:"An ETL pipeline using Python and data modeling with Apache Cassandra. Created an Apache Cassandra database which can create queries on song play data to answer the questions on the user activity on the app.",url:"https://github.com/aditya-bhat/Data-Modeling-with-Cassandra",tech:["Python","Apache Cassandra"]},{id:7,title:"Data Modeling with Postgres",abstract:"An ETL pipeline using Python. Defined the fact and dimension tables for a star schema for a particular analytic focus, and wrote an ETL pipeline that transfers data from files in two local directories into these tables in Postgres using Python and SQL.",url:"https://github.com/aditya-bhat/Data-Modeling-with-Postgres",tech:["Python","PostgreSQL"]},{id:6,title:"LegoNet - Classification and Extractive Summarization of Indian legal judgments",abstract:"Developed an NLP system working in a team of three, to classify andsummarize Indian Legal Judgments using Deep Learning. Focused onSentence-Paragraph level encoding, Capsule Networks for Text Clas-sification and Unsupervised Text Summarization.Presented Paper atInternational Symposium - LKE 2019, Dublin, Ireland.",url:"",tech:["Python","Numpy","Pandas","TensorFlow","Keras","PHP"]},{id:5,title:"Modular implementation of a Deep Neural Net from scratch",abstract:"Keras style modular implementation of a DNN with layers for Dense, Reshape, Activations, optimizers like SGD, Adam, etc. and loss func-tions like MSE, and cross entropy.",url:"",tech:["Python","Numpy"]},{id:4,title:"Machine Translation",abstract:"End-to-End ASR Pipeline to transcribe speech to text using CNNs andvariants of RNNs trained on acoustic features like MFCCs and spectrograms.",url:"",tech:["Python","Numpy","TensorFlow","Keras","Librosa"]},{id:3,title:"Speech Transcription",abstract:"End-to-End machine translation pipeline using recurrent neural network architectures. The pipeline accepts Engligh text as input and returns the French translation.",url:"",tech:["Python","Numpy","TensorFlow","Keras"]},{id:2,title:"Hidden Markov Model based POS Tagger",abstract:"Implementation of part of speech tagging with a universal tagset based on the Hidden Markov Model using the pomegranate library.",url:"https://github.com/aditya-bhat/HMM-Part-of-Speech-Tagger",tech:["Python","Pomegranate"]},{id:1,title:"Xv6 - Virtual to Physical Address Translation",abstract:"Added a system call to the Xv6 Operating system that translates the virtual address to a physical address.",url:"",tech:["C","Xv6","Linux"]}],publication:[{id:1,publishDate:"",file_location:"/files/publications/JIFS-2020.pdf",title:"LegoNet - Classification and Extractive Summarization of Indian Legal Judgments with Capsule Networks and Sentence Embeddings",authors:["Aditya D Bhat, Harshith R Acharya, Avinash K, Ramamoorthy Srinath"],publisher:"IOS Press - Journal of Intelligent and Fuzzy Systems (2020)",abstract:"In this paper, we propose the LegoNet - a system to classify and summarize legal judgments using Sentence Embedding, Capsule Networks and Unsupervised Extractive Summarization. To train and test the system, we have created a mini-corpus of Indian legal judgments which have been annotated according to the classes: Facts, Arguments, Evidences and Judgments. The proposed framework uses Sentence Embedding and Capsule Networks to classify parts of legal judgments into the classes mentioned above. This is then used by the extractive summarizer to generate a concise and succinct summary of the document grouped according to the above mentioned classes. Such a system could be used to help enable the Legal Community by speeding up the processes involving reading and summarizing legal documents which a Law professional would undertake in preparing for a case. The performance of the Machine Learning Model in this architecture can improve over time as more annotated training data is added to the corpus.",url:"https://content.iospress.com/articles/journal-of-intelligent-and-fuzzy-systems/ifs179870"},{id:2,publishDate:"",file_location:"/files/publications/IAS19-631.pdf",title:"A Novel Solution to the Curse of Dimensionality in Using KNNs for Image Classification",authors:["Aditya D Bhat, Harshith R Acharya, Srikanth HR"],publisher:"IEEE 2nd International Conference on Intelligent Autonomous Systems, ICoIAS (2019)",abstract:"The k-Nearest Neighbors (KNN) is one of the simplest and widely used algorithms in Machine Learning applications such as Image Classification. Being based on the Euclidean distance the algorithm is quite simple and effective in most cases. However, it suffers from the problem of \u201dThe Curse of Dimensionality\u201d as the Euclidean distance becomes meaningless when the dimension of data becomes significantly high. In this paper we present a novel solution to this problem by making use of the Convolutional Neural Network (CNN) which can extract the most important features automatically from the images. These features extracted by the CNN are of reduced dimensions and can effectively be used by the KNN to recognize the images. The results and comparisons show that the proposed method is also seen to reduce the time taken for testing while retaining high accuracy. The proposed technique achieved an accuracy of 96.92% on MNIST, 85.09% on Fashion MNIST and 95.17% on the A-Z Alphabets databases respectively.",url:"https://ieeexplore.ieee.org/document/8782498"},{id:3,publishDate:"",file_location:"/files/publications/CCEM2018.pdf",title:"Pronunciation Training on Isolated Kannada Words using 'Kannada Kali' - A Cloud Based Smart Phone Application",authors:["Savitha Murthy, Ankit Anand, Avinash Kumar, Ajay Cholin, Ankita Shetty, Aditya Bhat, Akshay Venkatesh, Lingaraj Kothiwale, Viraj Kumar, and Dinkar Sitaram"],publisher:"7th IEEE International Conference on Cloud Computing in Emerging Markets, CCEM (2018)",abstract:"Automated feedback on pronunciation system on a smart phone is useful for a student trying to learn a new language at his or her own pace. The objective of our research is to implement a pronunciation training system with minimal language specific data. Our proposed system consists of an Android application as a front-end, and a pronunciation evaluation and mispronunciation detection framework as the back-end hosted on a cloud. We conduct our experiments on spoken isolated words in Kannada. Our pronunciation evaluation(for spoken word) implementation on the cloud involves training a classifier with features from Dynamic Time Warping (DTW) with Mel Frequency Cepstral Coefficients (MFCC) and Line Spectral Frequencies (LSF) and, without directly on LSF (without DTW). We study the performance of different machine learning algorithms for pronunciation rating. We propose a novel semi-supervised approach for detecting mispronounced segments of a word using Self Organizing Maps (SOM) that are also deployed on the cloud. Our implementation of SOM learns the features of an automatically segmented reference speech. The trained SOM is then used to determine the deviations in the learner's pronunciation. We evaluate our system on 1169 Kannada audio samples from students around 18 to 25 years of age. The Kannada words considered are taken from textbooks of first and second grade (considering learners as beginners who do not know Kannada) and include 2 to 5 syllable words. We report accuracy on binary classification and multi-class classification for different classifiers. The mispronounced segments detected using SOM correlate with the human ratings. Our approach of pronunciation evaluation and mispronunciation detection is based on minimal data and does not require a speech recognition system.",url:"https://ieeexplore.ieee.org/document/8648645"},{id:4,publishDate:"",file_location:"/files/publications/T4E2018.pdf",title:"Kannada Kali: A Smartphone Application for Evaluating Spoken Kannada Words and Detecting Mispronunciations using Self Organizing Maps",authors:["Savitha Murthy, Ankit Anand, Avinash Kumar, Ajay Cholin, Ankita Shetty, Aditya Bhat, Akshay Venkatesh, Lingaraj Kothiwale, Viraj Kumar, and Dinkar Sitaram"],publisher:"IEEE 9th International Conference on Technology for Education, T4E (2018)",abstract:'Computer Aided Pronunciation Training (CAPT) systems can assist people learning to speak new languages by detecting and correcting mispronunciations. "Kannada Kali" is a prototype Android application that leverages learners\' increasing access to smartphones to evaluate the pronunciation of Kannada words and provide feedback using a cloud-based framework. A CAPT system typically uses an Automatic Speech Recognition (ASR) sub-system. For sufficient accuracy, ASR systems need to be trained using speech data from both native (L1) and non-native (L2) speakers. Since the latter type of data is particularly difficult to gather, we follow recent research efforts that seek to minimize the dependency on large speech corpora. We recorded 21 Kannada words (two to five syllables long) pronounced correctly by a Kannada teacher as templates, and 1169 samples of these words spoken by 19 native and non-native Kannada speakers aged 18 to 25 years. These samples were manually rated on a 5-point Likert scale by the Kannada teacher and used to train a neural network classifier for our application. "Kannada Kali" provides learners feedback that matches the teacher ratings with an accuracy of 86% on binary classification and 68% on multi-class classification. We also propose a novel approach for detecting mispronunciations using Self Organizing Maps (SOM) and report promising initial results.',url:"https://ieeexplore.ieee.org/document/8590097"},{id:5,publishDate:"",file_location:"/files/publications/Elsevier-orb-kpca-2018.pdf",title:"An efficient ORB based Face Recognition framework for Human-Robot Interaction",authors:["A Vinay, Ajaykumar S. Cholin, Aditya D. Bhat, K. N. Balasubramanya Murthy, and S. Natarajan"],publisher:"Elsevier, Procedia Computer Science, Volume 133 (2018)",abstract:"In Human-Robot Interaction (HRI), quick and efficient FR techniques are often required in service robots. In a real time scenario, it is absolute that face image patterns observed by robots depends often on variations such as pose, light conditions, location of the robots (view point), etc. In addition to these constraints, the service robots are expected to be quick enough for FR so that they can be deployed in applications such as counting people, security and surveillance, directing humans, etc. In this paper, ORB, a computational expensive and quick feature extraction technique is used, which has been a panacea for the above mentioned constraints. One of the dimensionality reduction techniques called PCA (a tool which reduces high dimensional data to lower dimension while keeping most of the data) with its sublime advantages of reduction of storage and time is often used. But, in the FR system , the linear uncorrelated components of PCA doesn\u2019t consider the non-linear factors such as occlusion and in such cases PCA fails to find the good representative direction. Kernel PCA (KPCA) which uses kernel methods considers even the non-linear factors and is proven to be more suitable than PCA, thus producing better results. By considering all these factors, our paper proposes a novel technique ORB-KPCA for FR along with Threshold Based Filtering (TBF). The proposed technique is proven to be efficient in both time and space by experimenting on three benchmark datasets (ORL, Faces96 and Grimace).",url:"https://www.sciencedirect.com/science/article/pii/S1877050918310470"}]});var Ce=function(){return document.title=Ae.about.name,i.a.createElement("div",{className:"App"},i.a.createElement(Ne.a,null),i.a.createElement(I,{className:"App-header"}),i.a.createElement(xe,{portfolioData:Ae}),i.a.createElement(f,{link:Ae.about.socialLinks.github,name:Ae.about.name,social_links:Ae.about.socialLinks,message:Ae.about.getInTouchMessage}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(re.a,null,i.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a.p+"static/media/profile.3c5b5034.png"},91:function(e,t,a){e.exports=a(114)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.4a38530d.chunk.js.map