(function(){var _o={};
var $={
	im:{m:"Home",s:"Welcome"},
	g:{m:"Home",s:"Welcome"},
	ut:0,
	ss:0,
	ssl:0,
	cc:[],
	tg:{},
	su:[],
	fot:["bc.jpg","van.jpg","cal.jpg","edm.jpg","win.jpg","ham.jpg","tor.jpg","kin.jpg","ott.jpg","mtl.jpg","que.jpg","hal.jpg"],
	rty:["","Directly from HIRO","A Health Care Professional","A Patient","A Family Member","Social Media","Other"],
	w:1,
	ini:function(){
		$xml.ods.fetch('content',function(v){$.json_mod(v);},{sys:'hiro'});
		//$.db.login();

		$.font_resize();
		window.addEventListener("resize",function(){
			$.w=1;
			$.font_resize();
		});
		no.targs=_o;
		no.$(document.body,
			no.div({id:"con_pag", _s:'p.0,m.0,w1,h1,ovh,blo'})
		);
		var s=$.url_get().search;
		var j=$.search_to_json(s);
		if(s==="" || j.m=="intro"){$.url_set("?m=intro"); $.intro_build();}
		else{
			$.url_set(s);
			$.g.m=j.m;
			$.g.s=j.s;	
			$.page_build();
		}
	
		no.targs=0;
	 },
	intro_build:function(){
		_o.con_pag.clear();
		no.targs=_o;
		no.div(_o.con_pag,{id:"con_top",_s:'b.999,w1,h.30%,blo'},
			no.div({_s:'b.999,m0a,cen,h1'},
				no.div({_s:'b.999,m0a,cen,h.20%'}),
				no.img({src:"img/logo.png",_s:"blo,o.f,m0a,bw.10,height:60%"}),
				no.div({_s:'b.999,m0a,cen,h.20%'})
			)
		);
		no.div(_o.con_pag,{id:"con_mid",_s:',h.70%,w.70%,m0a,f.100%,blo'},
			no.div({_s:'m0a,cen,h.25%'}),
			no.div(_o.mid_cen,{id:"con_ini",_s:'blo,m0a,cen,h.50%,f.100%'}, 
				no.div({_s:"f.280%,m0a,c.6,pb.20,font-family:'Cinzel';"},"Hearts in Rhythm Organization"),
				no.div({_s:'m0a,c.8,f.200%'},"Welcome to HIRO, a place where we hope you can find all of the information and connections to understand "),
				no.div({_s:'m0a,c.8,f.200%'}," and live to the fullest with an inherited heart rhythm condition.")
			),
			no.div({_s:'m0a,cen,h.25%'})
		);
		$.menu_top();
		no.targs=_o;
	 },
	page_build:function(o){
		_o.con_pag.clear();
		no.targs=_o;
		no.div(_o.con_pag,{id:"con_top",_s:'b.999,w1,h.12%,blo'});
		no.div(_o.con_pag,{id:"con_mid",_s:'rel,h.88%,w.100%,m0a,f.100%,z.2,blo'});
		no.div(_o.con_pag,{id:"con_bot",_s:'abs,bot.0,h.50,w1,z.4'});
		$.logo_build();
		$.menu_top();
		_o.info_top.style.display="none";
		$.menu_main();
		$.menu_bot();
		$.mid_build();
		no.targs=0;
	 },
	logo_build:function(){
		no.div(_o.con_top,{_s:'ml.2%,w.0%,h1,dib'},
			no.div({_s:'b.999,h.20%,w.1%'}),
			no.img({id:"logo_ima",src:"img/logo.png",_s:"cel,o.f,bw.0,h.50%,opa.99,poi"},function(){
				$.g.m="Inherited Heart Rhythm Conditions";
				$.g.s="News";	
				$.url_set("?m=intro");
				$.intro_build();
			}),
			no.div({_s:'b.999,m0a,cen,h.20%,w.1%'})
		);
		no.div(_o.con_top,"Hearts in Rhythm Organization",{id:"top_ttl",_s:'abs,l.0%,t.1%,w1,c.555,f.150%,z.4,cen'});
	 },
	menu_top:function(){
		no.targs=_o;
		var lio=(U.uid)?"log out":"log in";
		no.div(_o.con_top,{id:"top_mnu",_s:'abs,rg.2%,t.1%,c.f,f.100%,dib,z.4,text-transform: uppercase;'},
			no.div({id:"info_top",_s:'dib,mr.20,poi'},"Home",function(){
				$.g.m=$.im.m;
				$.g.s=$.im.s;
				var se=$.json_to_search($.g);
				$.url_set(se);
				$.page_build();
			}),
			no.div({id:"log_in_out",_s:'dib,mr.20,poi'},lio,function(){
				if(_o.signup){_o.signup.del();}
				if(U.uid){
					U=0;
					var v={};
					v._act="out";
					$.log_send(v);
				}
				//if(_o.signup){_o.signup.del();}
				else{$.login_build();}
			}),
			no.div({_s:'dib,poi'},"sign up",function(){
				if(_o.log_in){_o.log_in.del();}
				$.signup_intro();
			})
		);
		no.targs=0;
	 },	
	login_build:function(){
		if(_o.log_in){_o.log_in.del();}
		no.targs=_o;
		var loc_u,loc_p;
		if(window.location.host=="localhost"){loc_u="";loc_p="";}else{loc_u="";loc_p="";}
		no.div(_o.con_pag,{id:"log_in",_s:'abs,rg.2%,t.5%,w.16%,b.b,f.100%,z.5,p.20,c.f,o.f,bw.7,c.6'},
			no.div("&#10799;",{id:"logx",_c:"button",_s:'f.14,abs,t.10,rg.10,w.24,r.20,lh.19,p.0|2|2|2'},function(o){
				o.parentNode.del();
			}),
			no.div({_s:"w1,mt.10"},
				no.div(	
					no.div("User Type"),
					no.select({id:"usr_typ",_c:"sup_sel"},
						no.option({value:"none"},""),
						no.option({value:"Research"},"Research"),
						no.option({value:"Health care professional"},"Health care professional"),
						no.option({value:"Patient"},"Patient")
					)
				),
				no.div(
					no.div("Username"),
					no.input({value:loc_u,id:"usr_inp",_s:'b.f, c.6,w1,bw.0'})
				),
				no.div(	
					no.div("Password"),
					no.input({value:loc_p,id:"pwd_inp",_s:'b.f, c.6,w1,bw.0', type:"password"},$.log_keydown)
				),
				no.div({_s:'w1,cen'},
					no.div("LOG IN",{_c:"button",_s:'f.90%, c.f,w.50%,o.fff,m0a,r.20,bw.1,mt.20,b.9'},function(){
						$.log_keydown();
					})
				)
			)
		);
		no.targs=0;
	 },
	log_keydown:function onkeydown(o,e){
		if(!o || e.keyCode==13){
			var v={usr:_o.usr_inp.value,pwd:_o.pwd_inp.value,reg_typ:_o.usr_typ.selectedOptions[0].value,_act:"log"};
			$.log_send(v);
		}
	 },
	log_send:function(v){  //revisite conditionall
		v._sys='hiro';
		v.$='../login/req.php';
		if(v.reg_typ!=="none" && v.usr!=="" && v.pwd!==""){
			sessionStorage.setItem("ut", v.reg_typ);
			jax(v,function(r){
				if(r && r.status==1){
					window.location=http="/5/hiro/?m=My-Account&s=Research-Dashboard";
				}else if(r){
					window.location.reload();
				}else{
					alert('Login failed');
					_o.log_in.del();
				}
			});
		}else{
			alert("Please fill all fields");
		}
	 },
	signup_intro:function(){
		if(_o.signup){_o.signup.del();}
		no.targs=_o;
		no.div(_o.con_pag,{id:"signup",_s:'abs,rg.2%,t.5%,w.35%,b.b,f.100%,z.6,p.20,c.f,o.f,bw.7,c.6'},
			no.div("&#10799;",{_c:"button",_s:'f.14,abs,t.10,rg.10,w.24,,lh.19,p.0|2|2|2'},function(o){
				o.parentNode.del();
			}),
			no.div({_s:"c.444"},
				no.div("Sign up page - Introduction",{_s:"f.140%,bb.fff,mb.2%,pb.1%,cen"}),
				no.div("We invite research patients, health care professionals, researchers and research staff involved with the national projects to register for an account. An account will provide you access to additional information and resources specific to your role. With a HIRO account you will be able to:"),
				no.div("<i>For research</i>",{_s:"pt.2%"}),
				no.div("Access the database.",{_s:"pl.20,f.95%"}),
				no.div("View studies your institution is currently involved in.",{_s:"pl.20,f.95%"}),
				no.div("View enrollment statistics.",{_s:"pl.20,f.95%"}),
				no.div("View library of related documents.",{_s:"pl.20,f.95%"}),
				no.div("<i>For Health Care Professionals</i>",{_s:"pt.2%"}),
				no.div("View a library of related documents and resources to help in your local practice or clinic.",{_s:"pl.20,f.95%"}),
				no.div("<i>For patients</i>",{_s:"pt.2%"}),
				no.div("View a synopsis about your condition.",{_s:"pl.20,f.95%"}),
				no.div("View a list of medication that is safe and unsafe to use.",{_s:"pl.20,f.95%"}),
				no.div("View recommendations for exercise and lifestyle.",{_s:"pl.20,f.95%"}),
				no.div("View your research participation status, what studies you are currently apart of and what you may be eligible for.",{_s:"pl.20,f.95%"}),
				no.div("To create an account, please fill the form on the next section with the following information. We will then contact you and verify your status as either a patient, health care professional or a participating research member and provide you with instructions to complete the registration process.",{_s:"pt.2%"}),
				no.div("<b>Register for a new account</b>",{_c:"button",_s:"mt.2%,w.50%,ml.25%,f.90%,text-transform:uppercase"},function(){$.signup_build_1();}),
				no.div("<b>If you have a registration code</b>",{_c:"button",_s:"mt.2%,mb.2%,w.50%,ml.25%,f.90%,text-transform:uppercase"},function(){$.signup_build_2();}),
				no.div("Thank you.",{_s:"pt.0%,f.120%,cen"})

	
			)
		);
		no.targs=0;
	 },
	signup_build_1:function(){
		if(_o.signup){_o.signup.del();}
		no.targs=_o;
		no.div(_o.con_pag,{id:"signup",_s:'abs,rg.2%,t.5%,w.30%,b.b,f.100%,z.6,p.20,c.f,o.f,bw.7,c.4'},
			no.div("&#10799;",{_c:"button",_s:'f.14,abs,t.10,rg.10,w.24,lh.19,p.0|2|2|2'},function(o){
				o.parentNode.del();
			}),
			no.div("SIGN UP",{_s:'f.120%,t.0,l.0.w1,bb.fff,mb.5'},function(o){
				o.parentNode.del();
			}),
			no.div(				
				no.div("Please fill in the following fields. We will use this information to determine if you are eligible for an account. You will receive an email indicating your eligibility and instructions on how to complete your registration.",{_s:"m.10|0,text-align:justify"}),
				no.div("Please note that research staff participating in the National registries may log on with their database account credentials and do not need to register online. If you are a collaborating researcher or research staff and do not have a database account, please contact us at heartsinrhythm@gmail.com.",{_s:"m.10|0,text-align:justify"})
			),
			no.div({_s:"dib,w.48%,l.0,t.10%,b.b,mr.4%"},
				no.div(
					no.div("First name"),function onchange(o){o.style.border="1px solid #bbb";},
					no.input({_c:"sup_inp",fld:"n1",type:"text",maxlength:35},function onchange(o){o.style.border="1px solid #bbb";})
				),
				no.div(	
					no.div("Last name"),
					no.input({_c:"sup_inp",fld:"n3",type:"text",maxlength:35},function onchange(o){o.style.border="1px solid #bbb";})
				),
				no.div(	
					no.div("Registrant type"),
					no.select({_c:"sup_sel",fld:"reg_typ"},function onchange(o){
							o.style.border="1px solid #bbb";
							if(o.selectedIndex==2){_o.aff_div.style.display="block";}
							else{_o.aff_div.style.display="none";}
						},
						no.option({value:""},""),
						no.option({value:"Research"},"Research"),
						no.option({value:"Health care professional"},"Health care professional"),
						no.option({value:"Patient"},"Patient"),
						no.option({value:"Other"},"Other")
					)
				)
			),
			no.div({_s:"dib,w.48%,b.b,t.10%"},
				no.div(	
					no.div("Email"),
					no.input({_c:"sup_inp",_s:"w1",fld:"email",type:"email",maxlength:50},function onchange(o){o.style.border="1px solid #bbb";})
				),
				no.div(	
					no.div("Confirm email"),
					no.input({_c:"sup_inp",_s:"w1",fld:"email",type:"email",maxlength:50},function onchange(o){o.style.border="1px solid #bbb";})
				),
				no.div(	
					no.div("How you heard about us"),
					no.select({_c:"sup_sel",fld:"how_hear"},function onchange(o){o.style.border="1px solid #bbb";},//$.signup_keydown_1,
						no.option({value:$.rty[0]},$.rty[0]),
						no.option({value:$.rty[1]},$.rty[1]),
						no.option({value:$.rty[2]},$.rty[2]),
						no.option({value:$.rty[3]},$.rty[3]),
						no.option({value:$.rty[4]},$.rty[4]),
						no.option({value:$.rty[5]},$.rty[5]),
						no.option({value:$.rty[6]},$.rty[6])
					)
				)
			),
			no.div({id:"aff_div",_s:"non"},
				no.div("Affiliation/Institution"),
				no.input({id:"aff_inp",_c:"sup_inp",fld:"affiliation",type:"text",_s:"w.48%",noo:1,maxlength:75})
			),
			//no.div("Thank you for your interest in HIRO. We will contact you shortly about your registration.",{_s:"m.10|0"}),
			no.div(_o.signup,{_s:'w1,cen,mt.20'},
				no.div("SUBMIT",{id:"sup_subm",_c:"button", _s:'mt.20,inl,p.0|10'},function(o){$.signup_submit_1(o);})
			)
		);
		//$.signup_submit_1();
		no.targs=0;
	 },
	signup_keydown_1:function onkeydown(o,e){
		if(e.keyCode==13){
			$.signup_submit_1(_o.sup_subm);
		}
	 },
	signup_submit_1:function(o){
		var v={},sd=1;
		var ss=_o.signup.getElementsByClassName("sup_sel");
		for (var i = 0; i < ss.length; i++) {
			if(!ss[i].getAttribute("noo") &&  ss[i].selectedOptions[0].value===0 ){
				ss[i].style.border="1px solid #f00";
				sd=0;
			}else{
				var fld=ss[i].getAttribute("fld");
				v[fld]=ss[i].selectedOptions[0].value;
			}
		}
		var si=_o.signup.getElementsByClassName("sup_inp");
		for (var j = 0; j < si.length; j++) {
			if(!si[j].getAttribute("noo") &&  si[j].value==="" ){
				si[j].style.border="1px solid #f00";
				sd=0;
			}else{
				var fd=si[j].getAttribute("fld");
				v[fd]=si[j].value;
			}
		}
		if(sd){
			$.signup_send(v);
			o.parentNode.parentNode.del();
		}else{
			alert("Please fill or correct the field(s) with a red border.");
		}
	 },
	signup_build_2:function(){
		if(_o.signup){_o.signup.del();}
		no.targs=_o;
		no.div(_o.con_pag,{id:"signup",_s:'abs,rg.2%,t.5%,w.30%,b.b,f.100%,z.6,p.20,c.f,o.f,bw.7,c.6'},
			no.div("&#10799;",{_c:"button",_s:'f.14,abs,t.10,rg.10,w.24,lh.19,p.0|2|2|2'},function(o){
				o.parentNode.del();
			}),
			no.div("SIGN UP",{_s:'f.120%,t.0,l.0.w1,bb.fff,mb.5'},function(o){
				o.parentNode.del();
			}),
			no.div(				
				no.div("Please enter the registration code that was emailed to you below and complete the following fields to complete your registration.",{_s:"m.10|0,text-align:justify"})
			),

			no.div({_s:"dib,w.48%,l.0,t.10%,b.b,mr.4%"},
				no.div({_s:"w1"},
					no.div("<b>Registration Code</b>",{_s:""}),
					no.input({_c:"sup_inp",fld:"reg_code",type:"text"})
				),
				no.div(	
					no.div("Password"),
					no.input({id:"pwd1",_c:"sup_inp",_s:"w1",type:"password",maxlength:64},function onchange(o){o.style.border="1px solid #bbb";})
				),
				no.div(	
					no.div("Confirm password"),
					no.input({id:"pwd2",_c:"sup_inp",_s:"w1",fld:"pwd",type:"password",maxlength:64},function onchange(o){
						if(o.value!=_o.pwd1.value){
							alert(" \"Confirm passsword\" is not the same as \"Password\"");
							_o.pwd1.value="";
							o.value="";
						}
					})
				)
			),
			no.div({_s:"dib,w.48%,b.b,t.10%"},
				no.div(	
					no.div("City"),
					no.input({_c:"sup_inp",fld:"city",type:"text",maxlength:25},function onchange(o){o.style.border="1px solid #bbb";})
				),
				no.div(	
					no.div("Province (if applicable)"),
					no.select({_c:"sup_sel",fld:"province",noo:1},
						no.option({value:"none"},""),
						no.option({value:"Alberta"},"Alberta"),
						no.option({value:"British Columbia"},"British Columbia"),
						no.option({value:"Manitoba"},"Manitoba"),
						no.option({value:"New Brunswick"},"New Brunswick"),
						no.option({value:"Newfound land & Labrador"},"Newfound land & Labrador"),
						no.option({value:"Nova Scotia"},"Nova Scotia"),
						no.option({value:"Northwest Territories"},"Northwest Territories"),
						no.option({value:"Nunavut"},"Nunavut"),
						no.option({value:"Ontario"},"Ontario"),
						no.option({value:"Prince Edward Island"},"Prince Edward Island"),
						no.option({value:"Quebec"},"Quebec"),
						no.option({value:"Saskatchewan"},"Saskatchewan"),
						no.option({value:"Yukon"},"Yukon")
					)
				),
				no.div(	
					no.div("Country"),
					no.input({_c:"sup_inp",fld:"country",type:"text",maxlength:25})
				)
			),
			no.div({_s:"mt.10,display:table"},
				no.input({_c:"sup_chk",type:"checkbox",id:"",_s:"cel,vam",fld:"mailing",noo:1}),
				no.div("Join our mailing list",{_s:"cel,w.95%,vam"})
			),
			no.div({_s:"display:table"},
				no.span({_s:"b.bbb,lh.16,r.4,display:table"},
					no.input({_c:"sup_chk",type:"checkbox",id:"",_s:"cel,vam,m.0|1|1|1",fld:"terms"},function onchange(o){o.parentNode.style.background="#bbb";},$.signup_keydown_2)
				),
				no.div("I agree to HIRO’s terms, conditions and privacy policy.",{_s:"cel,w.95%,vam"})
			),
			no.div({_s:'w1,cen,mt.20'},
				no.div("Submit",{id:"sup_subm2",_c:"button", _s:'mt.20,inl,p.0|10'},function(o){$.signup_submit_2(o);})
			)
		);
		no.targs=0;
	 },
	signup_keydown_2:function onkeydown(o,e){
		if(e.keyCode==13){
			$.signup_submit_2(_o.sup_subm2);
		}
	 },
	signup_submit_2:function(o){
		var v={},sd=1;
		var ss=_o.signup.getElementsByClassName("sup_sel");
		for (var i = 0; i < ss.length; i++) {
			var fld=ss[i].getAttribute("fld");
			v[fld]=ss[i].selectedOptions[0].value;
		}
		var si=_o.signup.getElementsByClassName("sup_inp");
		for (var j = 0; j < si.length; j++) {
			if(si[j].validity.valid===false){
				sd=0;
			}
			if(!si[j].getAttribute("noo") &&  si[j].value==="" ){
				si[j].style.border="1px solid #f00";
				sd=0;
			}else{
				var fd=si[j].getAttribute("fld");
				v[fd]=si[j].value;
			}
		}
		var sc=_o.signup.getElementsByClassName("sup_chk");
		for (var k = 0; k < sc.length; k++) {
			if(!sc[k].getAttribute("noo") &&  sc[k].checked===0 ){
				sc[k].parentNode.style.background="#f00";
				sd=0;
			}else{
				var fdc=sc[k].getAttribute("fld");
				v[fdc]=sc[k].checked;
			}
		}
		if(sd){
			$.signup_send(v);
			o.parentNode.parentNode.del();
		}else{
			alert("Please fill or correct the fields with a red border.");
		}
	 },
	signup_send:function(v){
		jax({$i:'pdg_hiro',request:'user_reg',v:json(v)},function(r){
			signup_post_send(r);
		});
	 },
	signup_post_send:function(v){
		if(_o.signup){_o.signup.del();}
		no.targs=_o;
		var tx={
			"0":"We are sorry, we were unable to complete this first step in the sign up process.<br> Please contact xxx at the following email address: xxx",
			"1":"Thank you for your interest in HIRO.<br>We will contact you shortly about your registration",
			"100":"We are sorry, we were unable to complete the sign up process.<br> Please contact xxx at the following email address: xxx",
			"101":"Registration successfully completed.<br>You are now a HIRO!<br>Please use the ‘Log In’ button at the top left of the website to log in."
		};
		no.div(_o.con_pag,{id:"signup",_s:'abs,rg.2%,t.5%,w.30%,b.b,f.100%,z.6,p.20,c.f,o.f,bw.7,c.4'},
			no.div("&#10799;",{_c:"button",_s:'f.14,abs,t.10,rg.10,w.24,lh.19,p.0|2|2|2'},function(o){
				o.parentNode.del();
			}),
			no.div("SIGN UP",{_s:'f.120%,t.0,l.0.w1,bb.fff,mb.5'},function(o){
				o.parentNode.del();
			}),
			no.div(				
				no.div(tx[v],{_s:"m.10|0"})
			)
		);
		no.targs=0;
	 },
	menu_main:function(){
		var mnd=no.div(0,_o.con_top,{id:"mnu_mn",_s:"dib,h.12%,abs,w.96%,cen"});
		var mndd=no.div(0,mnd,{id:"inr_mnu",_s:"abs,bot.0%,cen,w1"});
		var mndu=no.ul(0,mndd,{id:"main_ul",_s:"p.0"});
		var ut = $.ses_var_get("ut");
		var mc=(U && ut)?$.json_merge(_c.info, _c[ut]):_c.info;
		var mn=Object.keys(mc);
		for (var i = 0; i < mn.length; i++){
			var cls=(mn[i]==$.g.m)?"main_lbl_sel":"main_lbl";
			var hrt=(mn[i]=="My Account")?" &hearts; My Account":mn[i];
			var li=no.li(0,mndu,hrt,{_c:cls,_s:"rel,dib,z.3,c.f,f.120%,pl.1%,pr.1%,line-height:200%"});
			no.li(mndu,"|",{_c:"mnu_sep"});
			var ul=no.ul(0,li,{id:"cur_ul",_s:"z.3,b.bbb"});
			var sm=Object.keys(mc[mn[i]]);
			for (var j = 0; j < sm.length; j++){
				$.submenu_main(ul,mndu,mn[i],sm[j]);
			}
		}
	 },
	submenu_main:function(ul,mndu,m,s){
		var ic=(m==$.g.m && s==$.g.s)?"main_sel":"main_nosel";
		no.li(ul,s,{_c:ic,_s:"f.85%,pl.5%,pr.2%,line-height:150%"},function(o){
			$.ss=0;
			mndu.getElementsByClassName("main_lbl_sel")[0].className="main_lbl";
			ul.parentNode.className="main_lbl_sel";
			var cl=mndu.getElementsByClassName("main_sel")[0];
			if(cl){cl.className="main_nosel";}
			o.className="main_sel";
			$.g.m=m; $.g.s=s;
			var us=$.json_to_search($.g);
			$.url_set(us);
			$.mid_build();
			if(s=="Related Articles" || s=="HCP News and Articles"){location.reload();}
		});
	 },
	mid_menu:function(v){
		var l=Object.keys(v.con);
		no.ul(_o.mid_inr_mnu,{id:"mnu_row",_s:"w1,p.0"});
		for (var i = 0; i < l.length; i++){
			var sc=(i==$.ss)?"mid_mnu_sel":"mid_mnu";
				no.li(_o.mnu_row,l[i],{nu:i,_c:sc,_s:"w1,lft,p.5%,pt.2%,pb.2%,mb.2%"},function(o){
					$.ssl=o.innerHTML;
					$.ss=o.getAttribute("nu");
					$.mid_build();
				}
			);
		}
	 },
	menu_bot:function(){
		no.div(_o.con_bot,{_s:""},
			no.a({id:"soc_em",_s:"poi,h.40,w.40,abs,rg.20,bot.10"},function(){$.send_mail();}),
			no.a({id:"soc_fb",_s:"poi,h.40,w.40,abs,rg.70,bot.10","href":"https://www.facebook.com/heartsinrhythm","target":"_blank"}),
			no.a({id:"soc_tw",_s:"poi,h.40,w.40,abs,rg.120,bot.10","href":"https://twitter.com/HeartsInRhythm","target":"_blank"})
		);
	 },
	send_mail:function(){
	    document.location.href = "mailto:heartsinrhythm@gmail.com?subject=" + encodeURIComponent("HIRO Inquiry") + "&body=" + encodeURIComponent("");
	 },
	mid_build:function(){
		_o.con_mid.clear();
		no.targs=_o;
		var ut = $.ses_var_get("ut");
		var mc=(U && ut)?$.json_merge(_c.info, _c[ut]):_c.info;
		var get="?m=Home&s=Welcome";
		if(mc[$.g.m]===undefined){
			window.location.assign(get);
		}else if(mc[$.g.m][$.g.s]===undefined){
			window.location.assign(get);
		}
		var mi=mc[$.g.m][$.g.s];
		var sl=(mi.att)?mi.att._s:"";
		var ima="i_"+Math.floor((Math.random() * 10)); 
 		no.div(_o.con_mid,{_s:"h1"},
			no.div({_s:"img/"+ima+".jpg,abs,l.0.t.0,opa.90,h1,w1,bt.fff,bw.5,background: url(img/"+ima+".jpg) no-repeat fixed center center / cover"}),
			no.div({id:"con_mid_out",_s:"w.50%,h.90%,abs,l.30%,t.5%"},
				no.div({id:"con_mid_in",_s:"w1,b.f,opa.99,p.2%,c.6,display:table,h.20%"},
					no.div({_s:"h.7%,rel,w1,display:table-row"},
						no.div({id:"mid_til",_s:"f.160%,c.bc4545,bb.bbb,bot.0,l.0,w1,cel"},$.g.s)),
					no.div({id:"mid_inr_txt"})
				)
			),
			no.div({id:"mid_inr_mnu",_s:"abs,w.12%,left:17.5%,t.13%,opa.99"})
		);
		var l=Object.keys(mi.con);
		var va=mi.att;
		if(va!==""){
			var at=va.split("||");
			for(var k in at){
				var att=at[k].split("::");	
				if(att[0]=="style"){
					_o.mid_inr_txt._si(att[1]);
				}else if(att[0]=="ssm"){
					$.mid_menu(mi);
					mi=mi.con[l[$.ss]];
					mmt=document.getElementsByClassName("mid_mnu_sel")[0].innerHTML;
					_o.mid_til.innerHTML=_o.mid_til.innerHTML+"<span> &hearts; </span>"+"<span>"+mmt+"</span>";
				}else{
					_o.mid_inr_txt.setAttribute(att[0],att[1]);							
				}
			}
		}
		$.con_build(mi,_o.mid_inr_txt);
		if($.ssl=="Ontario" && $.g.s=="Find a Clinic"){$.mid_resize_pos(84);}
		if($.ssl=="How IHRCs Can Affect You and Your Family" || $.ssl=="Referrals and Triage"){$.mid_resize_pos(84);}

		no.targs=0;
	 },
	table_build:function(o,tg){
		var t=no.div(0,tg,{_c:"table",_s:"display:table"});
		for (var i = 0; i < o.length; i++) {
			var r=no.div(0,t,{_s:"display:table-row"});
			for(var j = 0; j < o[i].length; j++) {
				no.div(r,o[i][j],{_s:"cel"});
			}
		}
	 },
	mid_resize_pos:function(w){
		_o.con_mid_out.style.width=w+"%";
		_o.con_mid_out.style.left=((100-w)/2+7)+"%";
		mid_inr_mnu.style.left=(((100-w)/2+5)-10.5)+"%";
	 },
	con_build:function(o,t){
		var q=0,dd;
		for (var k in o){
			if(k=="con"){
				for(var kk in o.con){
					var oc=o.con[kk];
					var d=no.div(0,t);
					var a=oc.att.split("||");
					var ks=kk.substr(0,4);
					if(ks=="http"){no.a(d,kk,{href:kk,target:"blank"});dd=d;}
					else if(ks=="tabl"){
						var db=kk.split("__");
						$.db[db[1]+"_"+db[2]](db[1],d);
					}
					else if(ks=="gmap" || ks=="vdeo"){
						dd=no.iframe(0,d);
					}
					else if(ks=="varX"){
						var k1=kk.split("_")[1];
						var k2=k1.split(".");
						var k3=window[k2[0]];
						var k4=(k2[1])?k3[k2[1]]:k3;
						no.div(d,k4);
						dd=d;
					}
					else{no.div(d,kk);dd=d;}
					if(a!=""){
						for(var kl in a){
							var att=a[kl].split("::");
							if(att[0]=="style"){dd._si(att[1]);}
							else{dd.setAttribute(att[0],att[1]);}
						}
					}
					$.con_build(oc,d);
				}
			}
		}
		qxmdReadWidget.setOptions({ openLinkNewTab: true}); 
		qxmdReadWidget.setOptions({rowsPerPage: 1}); 

	 },
	ses_var_get:function(k){
		var v=sessionStorage.getItem(k);
		v=(v)?v.toLowerCase():false;
		return v;
	 },
	font_resize:function(){
		document.getElementsByTagName("html")[0].style.fontSize=Math.round(document.body.offsetWidth*document.body.offsetHeight/150000)*1+7+'px';
	 },
	url_get:function(){
		return { host:window.location.hostname,path:window.location.pathname, search:window.location.search};
	 },
	url_set:function(search){
		history.pushState(0,0,search);
	 },
	search_to_json:function(s){
		s=s.replace("?", "");
		s=s.replace(/&/g, '","');
		s=s.replace(/=/g, '":"');
		s='{"'+s.replace(/-/g, " ")+'"}';
		return jeval(s);
	 },
	json_to_search:function(o){
		var s="?";
		for(var i in o){
		    s+=i+"="+o[i].replace(/ /g, "-")+"&";
		}
		return s.slice(0, -1);
	 },
	json_mod:function(o){
		var pv={},v={};
		var c1,c2,c3,c4,c5,c6,c7;
		for(var k in o){
			var p=o[k];
			v[k]={};
			for(var l in p){
				var ll=p[l].lev.split(".").length;
				if(ll==1 ){
					c1=p[l].con;
					v[k][c1]={};
				}
				if(ll==2){
					c2=p[l].con;
					v[k][c1][c2]={con:{},att:p[l].att};
				}
				if(ll==3){
					c3=p[l].con;
					v[k][c1][c2].con[c3]={con:{},att:p[l].att};
				}
				if(ll==4){
					c4=p[l].con;
					v[k][c1][c2].con[c3].con[c4]={con:{},att:p[l].att};
				}
				if(ll==5){
					c5=p[l].con;
					v[k][c1][c2].con[c3].con[c4].con[c5]={con:{},att:p[l].att};
				}
				if(ll==6){
					c6=p[l].con;
					v[k][c1][c2].con[c3].con[c4].con[c5].con[c6]={con:{},att:p[l].att};
				}
				if(ll==7){
					c7=p[l].con;
					v[k][c1][c2].con[c3].con[c4].con[c5].con[c6].con[c7]={con:{},att:p[l].att};
				}
			}
		}
		$.db.con.rebuild(JSON.stringify(v));
	 },
	json_merge:function(o1,o2){
	 	var o3={};
	 	for(var k1 in o1){o3[k1]=o1[k1];}
	 	for(var k2 in o2){o3[k2]=o2[k2];}
	 	return o3;
	 },
	db:{
		con:{
			rebuild:function(v){
			 	jax({c:v},function(r){
			 	});
			}
		},
		pdg_enrollment_all:function(v,d){
			$.tg.all=d;
			jax({$i:v},function(r){
				r=JSON.parse(r).all; 
				$.table_build(r,$.tg.all);
			});
		},
		pdg_enrollment_local:function(v,d){
			$.tg.local=d;
			jax({$i:v},function(r){
				r=JSON.parse(r).local;
				$.table_build(r,$.tg.local);
			});
		}
	 }
};
this.$dom=$;
})();
$ajax.tag('$dom');