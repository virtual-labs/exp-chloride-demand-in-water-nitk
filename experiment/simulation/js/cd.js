var count2=0;
var titration=1;
var repeat=0;
var ccnt=0;
var xs,ys=0;
var dose=[0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5];

// var reading=[[0,0.6,0.7,0.8,0.9,1.1,1.4,1.7,2.3,1.5,2.5,2.6,3.0,3.5,4.5,4.0,4.0,4.3,4.6,5.3,5.5,5.8,6.3,6.9,7.0],// from manual 
			 // [1.2,0.8,0.7,0.7,0.8,0.7,0.7,0.5,0.6,0.4,0.8,0.6,0.9,0.6,0.7,0.5,0.4,0.4,0.3,0.3,0.3,0.5,0.4,0.4,0.4],//Data Set - 3
			 // [0,0.6,0.5,0.4,0.3,0.4,0.4,0.4,0.5,0.3,0.5,0.4,0.5,0.5,0.6,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.6,0.6],//Data Set - 2
			 // [1.0,0.7,0.7,0.6,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.4,0.4,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3],//Data Set - 4
			 // [0.6,0.5,0.5,0.4,0.5,0.5,0.6,0.5,1.2,0.4,0.4,0.5,0.3,0.3,0.2,0.3,0.3,0.4,0.3,0.4,0.3,0.3,0.3,0.3,0.3]]; //Data Set - 5

var reading=[[0.028,0.072,0.1,0.096,0.04,0.08,0.12,0.16,0.19,0.21,0.23,0.26,0.29,0.32,0.35,0.37,0.39,0.41,0.42,0.45,0.47,0.50,0.53,0.56,0.58], 
			 [0.03,0.069,0.1,0.096,0.07,0.05,0.073,0.12,0.16,0.19,0.21,0.24,0.26,0.29,0.33,0.36,0.37,0.39,0.41,0.43,0.45,0.47,0.50,0.53,0.56],//from manual
			 [0.07,0.18,0.29,0.37,0.46,0.53,0.64,0.75,0.46,0.8,0.92,0.98,1.02,1.04,1.07,1.09,1.11,1.16,1.2,1.27,1.32,1.39,1.43,1.48,1.5],
			 [0.18,0.37,0.5,0.6,0.56,0.48,0.32,0.2,0.4,0.48,0.51,0.53,0.56,0.58,0.62,0.66,0.7,0.72,0.74,0.76,0.79,0.82,0.86,0.88,0.9],
			 [0,0.04,0.1,0.16,0.22,0.28,0.34,0.4,0.46,0.52,0.58,0.64,0.7,0.6,0.50,0.44,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2]];
			 
var p=Math.floor(Math.random()*(5));

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});
		
function navNext()
{
	for(temp=0;temp<=17;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

var ca;
var questions=["Chlorine solution is added in the increment of ",
			   "Chlorine demand may change with dosage, </br>time, temperature, pH, nature and amount</br> of the impurities in the water.",
			   "Chlorine demand is ",
			   "Normality of iodine solution is __________"];
var options2=[["0.5ml","1.0ml","1.5ml","2.0ml"],//0.5ml
			  ["True","False"],//true
			  ["chlorine added in water or waste water + residual chlorine","chlorine added in water or waste water - residual chlorine","None of the above"],//chlorine added in water or waste water - residual chlorine(1)
			  ["0.0280N","0.0281N","0.0282N","0.0283N"]];//0.0282N

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}


//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

function showIncubatorKnob()
{
     if (document.getElementById('11-2').style.visibility=="hidden")
         document.getElementById('11-2').style.visibility="visible";
     else
         document.getElementById('11-2').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

	//rotating pointer clockwise upto HRN value
	var looper;
    var degrees = 0;
    var cnt=0;
	var degrees;
	var i=0,k=0;
	var t=20;
    function rotateAnimation(el,speed)
	{

	    var elem = document.getElementById(el);
	    if(navigator.userAgent.match("Chrome"))
		{
		     elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("Firefox"))
		{
		     elem.style.MozTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("MSIE"))
		{
		     elem.style.msTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("Opera"))
		{
		     elem.style.OTransform = "rotate("+degrees+"deg)";
	    } 
		else 
		{
		     elem.style.transform = "rotate("+degrees+"deg)";
	    }
	    looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);

		if(degrees<=120)
		{
			degrees++;
		}
		else
		{
			document.getElementById("3-8").style.visibility="hidden";
			document.getElementById("3-9").style.visibility="hidden";
			document.getElementById("p3-1").style="font-weight:bold;position:absolute; left:300px; top:335px; font-size:16px; color:red;";  
			document.getElementById("p3-1").innerHTML="Take out bottles and proceed to next step";
		}	
	}

function magic()
{
	if(simsubscreennum==1)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:460px; top:292.5px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById("1-4cap").onclick=function()
		{
			myStopFunction();
			document.getElementById("1-4cap").onclick="";
			document.getElementById("1-4cap").style.animation="openBottleCap 1.25s forwards";
			setTimeout(function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:375px; height: 40px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				document.getElementById("1-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("1-4").onclick="";	
					document.getElementById("1-4").style.animation="shiftSample 1.25s forwards";
					setTimeout(function()
					{
						document.getElementById("1-4").style="position:absolute; left:325px; top:40px;";
						document.getElementById("1-4").style.transformOrigin="100% 80%";
						document.getElementById("1-4").style.animation="rotateSample 1.25s forwards";
						setTimeout(function()
						{
							document.getElementById("1-4").style.visibility="hidden";
							document.getElementById("1-42").style.visibility="visible";
							setTimeout(function()
							{
							document.getElementById("1-5").style.visibility="visible";
							document.getElementById("1-5").style.animation="waterUp 2s forwards";
							setTimeout(function()
							{
								document.getElementById("1-42").style.transformOrigin="100% 80%";
								document.getElementById("1-42").style.animation="rotateSample2 0.5s forwards";
								setTimeout(function()
								{
									document.getElementById("1-42").style.visibility="hidden";
									document.getElementById("1-43").style.visibility="visible";
									document.getElementById("1-43").style.animation="shiftSampleDown 0.5s forwards";
									setTimeout(function()
									{
										document.getElementById("1-4cap").style.animation="closeBottleCap 1.5s forwards";
										setTimeout(function()
										{
											document.getElementById("1-1cap").style.visibility="visible";
											document.getElementById("1-1").style.visibility="visible";
											fillBodBottle1();
										},1750);
									},500);
								},500);
							},2000);
							},150);
						},1250);
					},1250);
				}					
			},1300);
		}
	}  
	if(simsubscreennum==2)
	{
		document.getElementById("1-1").style.visibility="hidden";		
		document.getElementById("1-1cap").style.visibility="hidden";
		document.getElementById("1-3").style.visibility="hidden";		
		document.getElementById("1-43").style.visibility="hidden";		
		document.getElementById("1-5").style.visibility="hidden";		
		document.getElementById("1-1samp2").style.visibility="hidden";		
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:590px; top:296px; height:25px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#2-71").click(function()
			{
				myStopFunction();
				$("#2-71").css({"visibility":"hidden"});
				$("#2-72").css({"visibility":"visible"});
				$("#2-72").animate({"position":"absolute","top":"198px"},250,
					function()
					{
						$("#2-72").animate({"position":"absolute","left":"610px","top":"347px"},1500,
							function()
							{
								$("#2-72").css({"visibility":"hidden"});
								$("#2-73").css({"visibility":"visible"});
								$("#2-91").fadeIn(500,
									function()
									{
										$("#p2-1").css({"visibility":"visible"});
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById("arrow1").style="visibility:visible; position:absolute; left:570px; top:100px; height:35px; z-index:10;";
										document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
										document.getElementById("arrow1").style.msTransform="rotate(180deg)";
										document.getElementById("arrow1").style.transform="rotate(180deg)";
										$("#2-91").click(function()
										{
											myStopFunction();
											$("#p2-1").css({"visibility":"hidden"});
											$("#2-91").css({"visibility":"hidden"});
											$("#2-92").css({"visibility":"visible"});
											$("#2-92").animate({"position":"absolute","top":"140px"},1000,
												function()
												{
													$("#p2-2").css({"visibility":"visible"});
													$("#2-93").css({"visibility":"visible"});
													$("#2-94").css({"visibility":"visible"});
													$("#2-95").css({"visibility":"visible"});
													myInt=setInterval(function(){animatearrow();},500);
													document.getElementById("arrow1").style="visibility:visible; position:absolute; left:315px; top:249px; height:25px; z-index:10;";
													document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
													document.getElementById("arrow1").style.msTransform="rotate(180deg)";
													document.getElementById("arrow1").style.transform="rotate(180deg)";
													$("#2-94").click(function()
													{
														myStopFunction();
														$("#2-94").off("click");
														$("#2-93").css({"visibility":"hidden"});
														$("#2-94").css({"visibility":"hidden"});
														$("#2-95").css({"visibility":"hidden"});
														$("#p2-2").css({"visibility":"hidden"});
														$("#2-96").css({"visibility":"visible"});
														$("#2-81").animate({"position":"absolute","top":"360px"},1500);
														$("#2-96").animate({"position":"absolute","top":"265px"},1500,
															function()
															{
																$("#2-97").css({"visibility":"visible"});
																$("#2-92").css({"visibility":"hidden"});
																$("#2-96").css({"visibility":"hidden"});
																$("#2-97").animate({"position":"absolute","top":"40px"},1000,
																	function()
																	{
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:247.5px; top:300px; height:25px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.transform="rotate(270deg)";
																		$("#2-33").click(function()
																		{
																			myStopFunction();
																			$("#2-33").off("click");
																			$("#2-33").css({"visibility":"hidden"});
																			$("#2-98").css({"visibility":"visible"});
																			$("#2-98").animate({"position":"absolute","top":"215px"},250,
																			function()
																			{
																				$("#2-98").css({"visibility":"hidden"});
																				$("#2-99").css({"visibility":"visible"});
																				$("#2-99").animate({"position":"absolute","left":"110px","top":"350px"},1000,
																				function()
																				{
																					$("#2-99").css({"visibility":"hidden"});
																					$("#2-100").css({"visibility":"visible"});
																				
																					myInt=setInterval(function(){animatearrow();},500);
																					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:590px; top:200px; height:30px; z-index:10;";
																					document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
																					document.getElementById("arrow1").style.msTransform="rotate(180deg)";
																					document.getElementById("arrow1").style.transform="rotate(180deg)";
																					$("#2-97").click(function()
																					{
																						myStopFunction();
																						$("#2-97").off("click");
																						$("#2-97").animate({"position":"absolute","left":"190px","top":"60px"},2000,
																						function()
																						{
																							myInt=setInterval(function(){animatearrow();},500);
																							document.getElementById("arrow1").style="visibility:visible; position:absolute; left:685px; top:400px; height:25px; z-index:10;";
																							document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																							document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																							document.getElementById("arrow1").style.transform="rotate(270deg)";
																							$("#2-73").click(function()
																							{
																								myStopFunction();
																								$("#2-73").off("click");
																								$("#2-73").css({"visibility":"hidden"});
																								$("#2-72").css({"visibility":"visible","position":"absolute","left":"610px","top":"347px"});
																								$("#2-72").animate({"position":"absolute","left":"542px","top":"190.5px"},1500,
																									function()
																									{
																										$("#2-72").animate({"position":"absolute","top":"210.5px"},500,
																											function()
																											{
																												$("#2-72").css({"visibility":"hidden"});
																												$("#2-71").css({"visibility":"visible"});
																												$("#2-71").off("click");
																												setTimeout(function()
																												{
																													$("#p2-4").css({"visibility":"visible"});
																													$("#p2-3").css({"visibility":"visible"});
																													addAlum();
																												},500);
																											}
																										);
																									}
																								);
																							});
																						}
																					);
																				});
																			});
																		});
																	  });  
																	}
																);
															}
														);
													});
												}
											);
										});
									} 
								);
							}
						);
					}
				);
			});
		},500);
	}
	
	if(simsubscreennum==3)
	{
		document.getElementById("2-103").style.visibility="hidden";
		document.getElementById("2-104").style.visibility="hidden";
		document.getElementById("2-105").style.visibility="hidden";
		document.getElementById("2-33").style.visibility="hidden";
		document.getElementById("2-53").style.visibility="hidden";
		document.getElementById("2-31").style.visibility="hidden";
		document.getElementById("tab22-1").style.visibility="hidden";
		document.getElementById("p2-3").style.visibility="hidden";
		setTimeout(function()
		{

			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:235px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
					// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
					// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById("3-2").onclick=function()
			{
				myStopFunction();
				 $('.door').toggleClass('doorOpen');
				document.getElementById("3-2").onclick="";	
				setTimeout(function(){
				document.getElementById("3-2").style.visibility="hidden";
				},350);
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:365px; height: 35px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
						// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
						// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(0deg)";
					document.getElementById("3-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("3-3").onclick="";	
						document.getElementById("3-3").style.visibility="hidden";
						document.getElementById("3-3b").style.visibility="visible";
						// document.getElementById("3-3b").style.animation="placeSampB 1.5s forwards";
						$("#3-3b").animate({"position":"absolute","left":"55px","top":"130px"},1500,
						function()
						{
							document.getElementById("3-3b").style.visibility="hidden";
							document.getElementById("3-4").style.visibility="visible";
							$("#3-6").fadeIn(500);
							$("#b3-1").click(function()
							{
								$("#b3-1").off("click");
								$("#3-6").fadeOut(50);
								document.getElementById("3-1").style.visibility="hidden";
								document.getElementById("3-3").style.visibility="hidden";
								document.getElementById("3-7").style.visibility="visible";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(0deg)";
									document.getElementById("incDoor").onclick=function()
									{
										myStopFunction();
										document.getElementById("incDoor").onclick="";	
										$('.door').toggleClass('doorOpen');
										setTimeout(function()
										{
											document.getElementById("3-2").style.visibility="visible";
											document.getElementById("3-8").style.visibility="visible";
											document.getElementById("3-9").style.visibility="visible";
											document.getElementById("p3-1").style.visibility="visible";
											document.getElementById("3-9").style.transformOrigin="80% 100%";
											rotateAnimation("3-9",60);
											setTimeout(function()
											{
												validateAnswer(0,0,"400px","250px");
												//document.getElementById("nextButton").style.visibility="visible";
											},8500);
											
										},1500);										
									}
								},250);
							});
						}
						);								
					}
				},1550);
			}
		},1000);
	}
	
	if(simsubscreennum==4)
	{				
		document.getElementById("3-1").style.visibility="hidden";
		document.getElementById("3-2").style.visibility="hidden";
		document.getElementById("3-3").style.visibility="hidden";
		document.getElementById("3-4").style.visibility="hidden";
		document.getElementById("3-7").style.visibility="hidden";
		document.getElementById("incDoor").style.visibility="hidden";
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:472.5px; top:240px; height:30px; z-index:10";
			document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
			document.getElementById("arrow1").style.msTransform="rotate(270deg)";
			document.getElementById("arrow1").style.transform="rotate(270deg)";
			$("#4-1").click(function()
			{
				$("#4-1").off("click");
				myStopFunction();
				$("#4-1").css({"visibility":"hidden"});
				$("#4-2").css({"visibility":"visible"});
				$("#4-2").animate({"position":"absolute","top":"155px"},250,
				function()
				{
					$("#4-2").animate({"position":"absolute","left":"550px","top":"327.5px"},750,
					function()
					{
						$("#4-2").css({"visibility":"hidden"});
						$("#4-1").css({"visibility":"visible","position":"absolute","left":"570px","top":"377.5px"});
						setTimeout(function()
						{
							myInt=setInterval(function(){animatearrow();},500);
							document.getElementById("arrow1").style="visibility:visible; position:absolute; left:410px; top:380px; height:32px; z-index:10";
							document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
							document.getElementById("arrow1").style.msTransform="rotate(180deg)";
							document.getElementById("arrow1").style.transform="rotate(180deg)";
							$("#4-3").click(function()
							{
								$("#4-3").off("click");
								myStopFunction();
								$("#4-3").css({"visibility":"hidden"});
								$("#4-31").css({"visibility":"visible"});
								$("#4-31").animate({"position":"absolute","left":"167px","top":"125px"},750);
								$("#4-4").animate({"position":"absolute","left":"160px","top":"239px"},750,
								function()
								{
									$("#4-4").css({"visibility":"hidden"});
									$("#4-6").css({"visibility":"visible"});
									$("#4-33").css({"visibility":"visible"});
									$("#4-32").css({"visibility":"visible"});
									$("#4-31").css({"transform":"rotate(-90deg)"},250);
									$("#4-32").animate({"position":"absolute","top":"245px"},1900);
									$("#4-7").animate({"position":"absolute","top":"369px"},1900,
									function()
									{
									   $("#4-41").css({"visibility":"visible"}); 
									   $("#4-32").css({"visibility":"hidden"}); 
									   $("#4-33").css({"visibility":"hidden"}); 
									   $("#4-6").css({"visibility":"hidden"});
									   $("#4-31").css({"transform":"rotate(0deg)"},250);
									   $("#4-31").animate({"position":"absolute","left":"400px","top":"250px"},750);
									   $("#4-41").animate({"position":"absolute","left":"400px","top":"406px"},750,
									   function()
									   {
											$("#4-3").css({"visibility":"visible"});
											$("#4-31").css({"visibility":"hidden"});
											myInt=setInterval(function(){animatearrow();},500);
											document.getElementById("arrow1").style="visibility:visible; position:absolute; left:616px; top:380px; height:32px; z-index:10";
											document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
											document.getElementById("arrow1").style.msTransform="rotate(270deg)";
											document.getElementById("arrow1").style.transform="rotate(270deg)";
											$("#4-1").click(function()
											{
												$("#4-1").off("click");
												myStopFunction();
												$("#4-1").css({"visibility":"hidden"});
												$("#4-2").css({"visibility":"visible"});
												$("#4-2").animate({"position":"absolute","left":"402px","top":"150px"},750,
												function()
												{
													$("#4-2").animate({"position":"absolute","top":"185px"},300,
													function()
													{
														$("#4-2").css({"visibility":"hidden"});
														$("#4-1").css({"visibility":"visible","position":"absolute","left":"422.5px","top":"239px"});
														document.getElementById("nextButton").style.visibility="visible";	
														repeat++;
													}
													);
												}
												);
											});
									   }
									   );									   
									}									   
									);
								}
								);
							});
						},350);
					}
					);
				}
				);

			});
		},500);
	}
	
	if(simsubscreennum==5)
	{
		document.getElementById("4-1").style.visibility="hidden";
		document.getElementById("4-3").style.visibility="hidden";
		document.getElementById("4-41").style.visibility="hidden";
	
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:507.5px; top:245px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById("5-2cap").onclick=function()
		{
			myStopFunction();
			document.getElementById("5-2cap").onclick="";
			$("#5-2cap").css({"visibility":"hidden"});
			$("#5-2cap2").css({"visibility":"visible"});
			$("#5-2cap2").animate({"position":"absolute","top":"170px"},200,
			function()
			{
				$("#5-2cap2").css({"visibility":"hidden"});
				$("#5-2cap3").css({"visibility":"visible"});
				$("#5-2cap3").animate({"position":"absolute","left":"560px","top":"325px"},1000,
				function()
				{
					$("#5-2cap3").css({"visibility":"hidden"});
					$("#5-2cap").css({"visibility":"visible","left":"582.5px","top":"370.5px"});
					$("#5-4").fadeIn(750,
					function()
					{
						document.getElementById("p5-1").style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:295px; top:220px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(220deg)"; 
					 // Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(220deg)"; 
					 // Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(220deg)";
						document.getElementById("5-4").onclick=function()
						{
							myStopFunction();
							document.getElementById("5-4").onclick="";
							document.getElementById("5-4").style.visibility="hidden";
							document.getElementById("p5-1").style.visibility="hidden";
							document.getElementById("5-41").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("5-41").style.animation="moveGP1 1.5s forwards";
								setTimeout(function()
								{
									$("#5-5bulb").fadeIn(1000);
									$("#5-5up").fadeIn(1000);
									$("#5-5down").fadeIn(1000);
									setTimeout(function()
									{
										document.getElementById("p5-2").style.visibility="visible";
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById("arrow1").style="position:absolute; visibility:visible; left:321px; top:300px; height:20px; z-index:10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										document.getElementById("5-5up").onclick=function()
										{
											myStopFunction();
											document.getElementById("5-5up").onclick="";
											document.getElementById("p5-2").style.visibility="hidden";
											$("#5-5bulb").fadeOut(1500);
											$("#5-5up").fadeOut(1500);
											$("#5-5down").fadeOut(1500);
											document.getElementById("5-41sw").style.visibility="visible";
											document.getElementById("5-41sw").style.animation="h2so4Up 1.5s forwards";
											$("#5-6").animate({"position":"absolute","top":"318"},1500,
											function()
											{
												document.getElementById("5-41sw").style.visibility="hidden";
												document.getElementById("5-41").style.visibility="hidden";
												document.getElementById("5-42").style.visibility="visible";
												 
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:450px; top:230px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById("5-42").onclick=function()
													{  
														myStopFunction();
														document.getElementById("5-42").onclick="";
														document.getElementById("5-42").style.animation="moveGP3 3s forwards";
														setTimeout(function()
														{   
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:627.5px; top:377px; height: 35px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(270deg)";
															document.getElementById("5-2cap").onclick=function()
															{
																myStopFunction();
																document.getElementById("5-2cap").onclick="";
																$("#5-2cap").css({"visibility":"hidden"});
																$("#5-2cap3").css({"visibility":"visible"});
																$("#5-2cap3").animate({"position":"absolute","left":"437.5px","top":"170px"},1000,
																function()
																{
																	$("#5-2cap3").css({"visibility":"hidden"});
																	$("#5-2cap2").css({"visibility":"visible"});
																	$("#5-2cap2").animate({"position":"absolute","left":"437.5px","top":"190px"},150,
																	function()
																	{
																		$("#5-2cap2").css({"visibility":"hidden"});
																		$("#5-2cap").css({"visibility":"visible","position":"absolute","left":"461px","top":"236px"});
																		
																		$("#5-5bulb").fadeIn(1500);
																		$("#5-5up").fadeIn(1500);
																		$("#5-5down").fadeIn(1500);
																		document.getElementById("p5-2").style="visibility:visible; position:absolute; left:350px; top:100px; color:red; font-size:14px;";
																		document.getElementById("p5-2").innerHTML="Press the down arrow on the bulb </br></br>to release the liquid into the flask";
																		setTimeout(function()
																		{
																			document.getElementById("p5-2").style.visibility="visible";
																			myInt=setInterval(function(){animatearrow();},500);
																			document.getElementById("arrow1").style="position:absolute; visibility:visible; left:358px; top:330px; height:20px; z-index:10;";
																			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
																			// Code for IE9
																			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
																			// Standard syntax
																			document.getElementById("arrow1").style.transform = "rotate(90deg)";
																			document.getElementById("5-5down").onclick=function()
																			{
																				myStopFunction();
																				document.getElementById("5-5down").onclick="";
																				document.getElementById("p5-2").style.visibility="hidden";
																				
																				$("#5-5bulb").fadeOut(1000);
																				$("#5-5up").fadeOut(1000);
																				$("#5-5down").fadeOut(1000);
																				document.getElementById("5-42").style.visibility="hidden";
																				document.getElementById("5-41").style="visibility:visible; position:absolute; left:120px; top:100px;";
																				document.getElementById("5-43").style.visibility="visible";
																				document.getElementById("drop5-1").style.visibility="visible";
																				document.getElementById("drop5-1").style.animation="drop1 1s 7";
																				$("#5-43").animate({"position":"absolute","top":"280px"},7000);
																				$("#5-1").animate({"position":"absolute","top":"366px"},7000,
																				function()
																				{
																					$("#5-43").css({"visibility":"hidden"});
																					$("#drop5-1").css({"visibility":"hidden"});
																					$("#5-41").animate({"position":"absolute","top":"50px"},200,
																					function()
																					{
																						$("#5-41").fadeOut(500,
																						function()
																						{
																							validateAnswer(1,0,"150px","100px");
																							//document.getElementById("nextButton").style.visibility="visible";
																						});
																					}
																					);
																				}
																				);
																			}
																		},1000);
																	}
																	);
																}
																);
															}
														},3100);
													}
												},1250);
											});
										}
									},1100);
								},1600);
								
							},150);
						}
					}
					);		
				}
				);
			}
			);
		}
	}
	
	if(simsubscreennum==6)
	{
		document.getElementById("5-2cap").style.visibility="hidden";
		setTimeout(function()
		{
			$("#6-10").fadeIn(500);
			setTimeout(function()
			{
				$("#p6-1").css({"visibility":"visible"});
				document.getElementById("p6-1").innerHTML="Add 1g of Potassium Iodide crystals"
				$("#6-11").fadeIn(500);
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:565px; top:300px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(240deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(240deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(240deg)";
				document.getElementById("6-11").onclick=function()
				{
					myStopFunction();
					document.getElementById("6-11").onclick="";
					$("#p6-1").css({"visibility":"hidden"});
					$("#6-11").animate({"position":"absolute","left":"525px","top":"337.5"},450,
					function()
					{
						$("#6-11").css({"visibility":"hidden"});
						$("#6-12").css({"visibility":"visible"});
						$("#6-12").animate({"position":"absolute","left":"504px"},150,
						function()
						{
							$("#6-10").css({"visibility":"hidden"});
							$("#6-13").css({"visibility":"visible"});
							$("#6-12").animate({"position":"absolute","left":"195px","top":"210px"},1300,
							function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:235px; top:237px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(245deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(245deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(245deg)";
								document.getElementById("6-12").onclick=function()
								{
									myStopFunction();
									document.getElementById("6-12").onclick="";
									document.getElementById("6-12").style.animation="rotateSpatula 1s forwards";
									setTimeout(function()
									{
										$("#6-12").css({"visibility":"hidden"});
										$("#6-11").css({"visibility":"visible","position":"absolute","left":"195px","top":"210px","transform":"rotate(-30deg)"});
										$("#6-14").fadeIn(100,
										function()
										{
											$("#6-14").animate({"position":"absolute","top":"370px"},800,
											function()
											{
												$("#6-11").fadeOut(500,
												function()
												{
													//document.getElementById("nextButton").style.visibility="visible";
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:160px; top:340px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById("6-3").onclick=function()
													{
														myStopFunction();
														document.getElementById("6-3").onclick="";
														document.getElementById("6-5").style.visibility="visible";
														document.getElementById("6-41").style.visibility="visible";
														document.getElementById("6-13").style.visibility="hidden";
														document.getElementById("6-3").style.visibility="hidden";
														document.getElementById("6-4").style.visibility="hidden";
														document.getElementById("6-5").style.animation="swing 2.5s 3 linear";
														setTimeout(function()
														{
															document.getElementById("nextButton").style.visibility="visible";
															document.getElementById("6-3").style.visibility="visible";
															document.getElementById("6-4").style.visibility="visible";
															document.getElementById("6-5").style.visibility="hidden";
															document.getElementById("6-41").style.visibility="hidden";
														},7500);
													}
												}
												);
											}
											);
										}
										);
									},1000);
								}
							}
							);
						}
						);
					}
					);
				}
			},250);
		},500);
	}
	if(simsubscreennum==7)
	{
		document.getElementById("6-3").style.visibility="hidden";
		document.getElementById("6-13").style.visibility="hidden";
		document.getElementById("6-14").style.visibility="hidden";
		document.getElementById("6-41").style.visibility="hidden";
		document.getElementById("6-4").style.visibility="hidden";
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:487px; top:297.5px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
			document.getElementById("arrow1").style.msTransform="rotate(270deg)";
			document.getElementById("arrow1").style.transform="rotate(270deg)";
			$("#7-3").click(function()
			{
				myStopFunction();
				$("#7-3").off("click");
				$("#7-3").animate({"position":"absolute","top":"260px"},300,
				function()
				{
					$("#7-3").animate({"position":"absolute","left":"500px","top":"362px"},1000,
					function()
					{
						$("#7-4").fadeIn(500,
						function()
						{
							myInt=setInterval(function(){animatearrow();},500);
							document.getElementById("arrow1").style="visibility:visible; position:absolute; left:440px; top:220px; height:30px; z-index:10;";
							document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
							document.getElementById("arrow1").style.msTransform="rotate(180deg)";
							document.getElementById("arrow1").style.transform="rotate(180deg)";
							$("#7-4").click(function()
							{
								myStopFunction();
								$("#7-4").off("click");
								$("#7-4").animate({"position":"absolute","top":"235px"},500,
								function()
								{
									$("#7-4").css({"visibility":"hidden"});
									$("#7-5").css({"visibility":"visible"});
									$("#7-6").animate({"position":"absolute","top":"345px"},600);
									$("#7-61").animate({"position":"absolute","top":"345px"},600,
									function()
									{
										$("#7-5").animate({"position":"absolute","top":"185px"},400,
										function()
										{
											$("#7-5").animate({"position":"absolute","left":"185px","top":"150px"},1000,
											function()
											{
												myInt=setInterval(function(){animatearrow();},500);
												document.getElementById("arrow1").style="visibility:visible; position:absolute; left:180px; top:230px; height:30px; z-index:10;";
												document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
												document.getElementById("arrow1").style.msTransform="rotate(180deg)";
												document.getElementById("arrow1").style.transform="rotate(180deg)";
												$("#7-5").click(function()
												{
													myStopFunction();
													$("#7-5").off("click");
													$("#7-5").css({"visibility":"hidden"});
													$("#7-7").css({"visibility":"visible"});
													$("#7-8").css({"visibility":"visible"});
													$("#drop7-1").css({"visibility":"visible"});
													document.getElementById("drop7-1").style.animation="drop3 1.5s 5";
													setTimeout(function()
													{
														document.getElementById("7-1").style.animation="colourChange1 7s forwards";
													},1500);
													$("#7-8").animate({"position":"absolute","top":"260px"},7500);
													$("#7-1").animate({"position":"absolute","top":"362px"},7500,
													function()
													{
														
														$("#drop7-1").css({"visibility":"hidden"});
														$("#7-7").css({"visibility":"hidden"});
														$("#7-8").css({"visibility":"hidden"});
														
														myInt=setInterval(function(){animatearrow();},500);
														document.getElementById("arrow1").style="visibility:visible; position:absolute; left:550px; top:365px; height:30px; z-index:10;";
														document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
														document.getElementById("arrow1").style.msTransform="rotate(270deg)";
														document.getElementById("arrow1").style.transform="rotate(270deg)";
														$("#7-3").click(function()
														{
															myStopFunction();
															$("#7-3").off("click");
															$("#7-3").animate({"position":"absolute","left":"438px","top":"260px"},1000,
															function()
															{
																$("#7-3").animate({"position":"absolute","top":"286.2px"},300,
																function()
																{
																	document.getElementById("nextButton").style.visibility="visible";
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		},750);
	}
	
	if(simsubscreennum==8)
	{
		document.getElementById("7-1").style.visibility="hidden";
		document.getElementById("7-8").style.visibility="hidden";
		// document.getElementById("table").style.visibility="hidden";
		
		// document.getElementById('titration').style="visibility:visible;left: 650px; top: 100px; position: absolute;font-weight: bold;text-transform: uppercase;";
		// document.getElementById('titration').innerHTML="Titration : " + titration;
		
		$("#8-2").fadeIn(1500);
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:300px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById("8-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("8-2").onclick="";
				document.getElementById("8-2").style.animation="moveFunnel 2s forwards";
				setTimeout(function()
				{
					document.getElementById("8-3samp").style.visibility="visible";
					document.getElementById("8-3").style.visibility="visible";
					document.getElementById("8-3Cap").style.visibility="visible";
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:559px; top:350px; height:30px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById("8-3Cap").onclick=function()
						{
							myStopFunction();
							document.getElementById("8-3Cap").onclick="";
							$("#8-3Cap").css({"visibility":"hidden"});
							$("#8-34").css({"visibility":"visible"});
							$("#8-34").animate({"position":"absolute","top":"280px"},300,
							function()
							{
								$("#8-34").css({"visibility":"hidden"});
								$("#8-35").css({"visibility":"visible"});		
								$("#8-35").animate({"position":"absolute","left":"560px","top":"399px"},1000,
								function()
								{
									$("#8-35").css({"visibility":"hidden"});
									$("#8-3Cap").css({"visibility":"visible","position":"absolute","left":"575.5px","top":"437px"});
									setTimeout(function()
									{
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:450px; height:30px; z-index:10;";
										document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
										document.getElementById("arrow1").style.msTransform="rotate(180deg)";
										document.getElementById("arrow1").style.transform="rotate(180deg)";
										document.getElementById("8-3").onclick=function()
										{
											myStopFunction();
											document.getElementById("8-3").onclick="";
											document.getElementById("8-32").style.visibility="visible";
											$("#8-3samp").css({"position":"absolute","left":"521.5px","top":"400px"});
											document.getElementById("8-3").style.visibility="hidden";
											$("#8-32").animate({"position":"absolute","left":"370px","top":"15px"},1500);
											$("#8-3samp").animate({"position":"absolute","left":"391.5px","top":"65px"},1500,
											function()
											{
												$("#8-32").css({"transform":"rotate(-90deg)"});
												$("#8-3samp").css({"visibility":"hidden"});
												$("#8-3samp2").css({"visibility":"visible"});
												setTimeout(function()
												{
													document.getElementById("8-2samp").style.visibility="visible";
													document.getElementById("8-2samp").style.animation="sampFromFunnelUpDown 2s 7 ";
													$("#8-3samp2").animate({"position":"absolute","top":"93px"},14000);

													setTimeout(function()
													{
														document.getElementById("8-2samp2").style.visibility="visible";
														setTimeout(function()
														{
															document.getElementById("8-2samp3").style.animation="whiteUp 5s forwards";
															setTimeout(function()
															{
																document.getElementById("8-2samp3").style.visibility="hidden";
																document.getElementById("8-2samp4").style.animation="sampFromFunnelUp 5s forwards";
																setTimeout(function()
																{
																	document.getElementById("8-2samp2").style.visibility="hidden";
																	document.getElementById("8-2samp").style.animation="sampFromFunnelDown2 1.5s forwards ";
																	setTimeout(function()
																	{
																		document.getElementById("8-2samp").style.visibility="hidden";
																		document.getElementById("8-2samp4").style="position:absolute; left:240px; top:185px;";
																		document.getElementById("8-2samp4").style.animation="sampFromFunnelUp2 1.5s forwards";
																		$("#8-32").css({"transform":"rotate(0deg)"});
																		$("#8-3samp2").css({"visibility":"hidden"});
																		$("#8-3samp").css({"visibility":"visible","position":"absolute","top":"75px"});
																		setTimeout(function()
																		{
																			$("#8-3samp").animate({"position":"absolute","left":"501px","top":"411px"},1500);
																			$("#8-32").animate({"position":"absolute","left":"480px","top":"350px"},1500);
																		
																			setTimeout(function()
																			{
																				document.getElementById("8-32").style.visibility="hidden";
																				document.getElementById("8-3").style.visibility="visible";
																				
																				myInt=setInterval(function(){animatearrow();},500);
																				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:618px; top:445px; height:30px; z-index:10;";
																				document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																				document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																				document.getElementById("arrow1").style.transform="rotate(270deg)";
																				document.getElementById("8-3Cap").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById("8-3Cap").onclick="";
																					$("#8-3Cap").css({"visibility":"hidden"});
																					$("#8-35").css({"visibility":"visible"});
																					$("#8-35").animate({"position":"absolute","left":"500px","top":"280px"},1000,
																					function()
																					{
																						$("#8-35").css({"visibility":"hidden"});
																						$("#8-34").css({"visibility":"visible"});		
																						$("#8-34").animate({"position":"absolute","top":"301px"},300,
																						function()
																						{
																							$("#8-34").css({"visibility":"hidden"});
																							$("#8-3Cap").css({"visibility":"visible","position":"absolute","left":"514.5px","top":"341px"});
																						}
																						);
																					}
																					);
																					setTimeout(function()
																					{
																						document.getElementById("8-3Cap").style.visibility="hidden";
																						document.getElementById("8-3").style.visibility="hidden";
																						document.getElementById("8-3samp").style.visibility="hidden";
																						
																						myInt=setInterval(function(){animatearrow();},500);
																						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:420px; top:155px; height:30px; z-index:10;";
																						document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
																						document.getElementById("arrow1").style.msTransform="rotate(0deg)";
																						document.getElementById("arrow1").style.transform="rotate(0deg)";
																						document.getElementById("8-2").onclick=function()
																						{
																							myStopFunction();
																							document.getElementById("8-2").onclick="";
																							document.getElementById("8-2").style.animation="moveFunnelBack 2s forwards";
																							setTimeout(function()
																							{
																								$("#8-2").fadeOut(800);
																								document.getElementById("nextButton").style.visibility="visible";
																							},2100);
																						}
																					},2100);
																				}
																			},1600);
																		},200);
																	},800);
																},5000);
															},4500);
														},800);
													},1000);
												},200);
											}	
											);
										}
									},100);//here
								}
								);
							}
							);
						}
					},250);
				},2100);
			}
		},1500);
	}
	if(simsubscreennum==9)
	{
		document.getElementById("8-2samp4").style.visibility="hidden";
		tn=9;
		startTitration();
	}
	if(simsubscreennum==10)
	{
		var count=0,vi=0,rc=0;
		document.getElementById("9-3").style.visibility="hidden";
		document.getElementById("9-3b").style.visibility="hidden";
		document.getElementById('titration').style="visibility:hidden";
		document.getElementById('p9-1').style="visibility:hidden";
		document.getElementById('p9-3').style="visibility:hidden";
		document.getElementById("dose10").innerHTML=dose[0];
		document.getElementById("in10").innerHTML=0;
		document.getElementById("fin10").innerHTML=reading[p][0];
		document.getElementById("dif10").innerHTML=reading[p][0] - 0;
		vi=document.getElementById("dif10").innerHTML;
		rc=(0.0282*vi*35.45*1000)/200;
		document.getElementById("rcf10").onclick=function()
		{
			$("#f10").css({"visibility":"visible"});
		}
		document.getElementById("rcc10").onclick=function()
		{
			$("#f10").css({"visibility":"hidden"});
			if(!document.getElementById("rci10").value || document.getElementById("rci10").value==" ")
			{
				alert("Enter the value to proceed!");
			}
			else
			{
				if(Math.round(rc)==Math.round(document.getElementById("rci10").value))
				{
					$("#w10").css({"visibility":"hidden"});
					$("#r10").css({"visibility":"visible"});
					$("#rcf10").css({"visibility":"hidden"});
					$("#rcr10").css({"visibility":"hidden"});
					$("#rcc10").css({"visibility":"hidden"});
					document.getElementById("rci10").style="border:none; background-color:transparent; color:black; font-size:15px; width:60px;";
					document.getElementById("nextButton").style.visibility="visible";
				}
				else
				{
					count++;
					$("#w10").css({"visibility":"visible"});
					$("#r10").css({"visibility":"hidden"});
					if(count==2)
					{
						$("#rcr10").css({"visibility":"visible"});
					}
				}
			}
		}
		document.getElementById("rcr10").onclick=function()
		{
			$("#f10").css({"visibility":"hidden"});
			$("#w10").css({"visibility":"hidden"});
			$("#r10").css({"visibility":"hidden"});
			$("#rcf10").css({"visibility":"hidden"});
			$("#rcr10").css({"visibility":"hidden"});
			$("#rcc10").css({"visibility":"hidden"});
			document.getElementById("rci10").value=rc.toFixed(3);
			document.getElementById("rci10").disabled=true;
			document.getElementById("rci10").style="border:none; background-color:transparent; color:black; font-size:15px; width:60px;";
			document.getElementById("nextButton").style.visibility="visible";	
		}
	}
	
	if(simsubscreennum==11)
	{
		$("#w10").css({"visibility":"hidden"});
		$("#r10").css({"visibility":"hidden"});
		tn=11;
		document.getElementById("popups1").style.visibility="visible";
		document.getElementById("ok").onclick=function()
		{
			document.getElementById("popups1").style.visibility="hidden";
			startTitration();
		}
	}
	
	if(simsubscreennum==12)
	{
		var count=0,vi=0,rc=0;
		document.getElementById("11-3").style.visibility="hidden";
		document.getElementById("11-3b").style.visibility="hidden";
		document.getElementById('p11-1').style="visibility:hidden";
		document.getElementById('p11-3').style="visibility:hidden";
		document.getElementById("dose12").innerHTML=dose[1];
		document.getElementById("in12").innerHTML=0;
		document.getElementById("fin12").innerHTML=reading[p][1];
		document.getElementById("dif12").innerHTML=reading[p][1] - 0;
		vi=document.getElementById("dif12").innerHTML;
		rc=(0.0282*vi*35.45*1000)/200;
		document.getElementById("rcf12").onclick=function()
		{
			$("#f12").css({"visibility":"visible"});
		}
		document.getElementById("rcc12").onclick=function()
		{
			$("#f12").css({"visibility":"hidden"});
			if(!document.getElementById("rci12").value || document.getElementById("rci12").value==" ")
			{
				alert("Enter the value to proceed!");
			}
			else
			{
				if(Math.round(rc)==Math.round(document.getElementById("rci12").value))
				{
					$("#w12").css({"visibility":"hidden"});
					$("#r12").css({"visibility":"visible"});
					$("#rcf12").css({"visibility":"hidden"});
					$("#rcr12").css({"visibility":"hidden"});
					$("#rcc12").css({"visibility":"hidden"});
					document.getElementById("rci12").style="border:none; background-color:transparent; color:black; font-size:15px; width:55px;";
					document.getElementById("nextButton").style.visibility="visible";
				}
				else
				{
					count++;
					$("#w12").css({"visibility":"visible"});
					$("#r12").css({"visibility":"hidden"});
					if(count==2)
					{
						$("#rcr12").css({"visibility":"visible"});
					}
				}
			}
		}
		document.getElementById("rcr12").onclick=function()
		{
			$("#f12").css({"visibility":"hidden"});
			$("#w12").css({"visibility":"hidden"});
			$("#r12").css({"visibility":"hidden"});
			$("#rcf12").css({"visibility":"hidden"});
			$("#rcr12").css({"visibility":"hidden"});
			$("#rcc12").css({"visibility":"hidden"});
			document.getElementById("rci12").value=rc.toFixed(3);
			document.getElementById("rci12").disabled=true;
			document.getElementById("rci12").style="border:none; background-color:transparent; color:black; font-size:15px;";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
	
	if(simsubscreennum==13)
	{
		$("#w12").css({"visibility":"hidden"});
		$("#r12").css({"visibility":"hidden"});
		tn=13;
		document.getElementById("popups2").style.visibility="visible";
		document.getElementById("ok2").onclick=function()
		{
			document.getElementById("popups2").style.visibility="hidden";
			startTitration();
		}
	}
	
	if(simsubscreennum==14)
	{
		var count=0,vi=0,rc=0;
		document.getElementById("13-3").style.visibility="hidden";
		document.getElementById("13-3b").style.visibility="hidden";
		document.getElementById('p13-1').style="visibility:hidden";
		document.getElementById('p13-3').style="visibility:hidden";
		document.getElementById("dose14").innerHTML=dose[2];
		document.getElementById("in14").innerHTML=0;
		document.getElementById("fin14").innerHTML=reading[p][2];
		document.getElementById("dif14").innerHTML=reading[p][2] - 0;
		vi=document.getElementById("dif14").innerHTML;
		rc=(0.0282*vi*35.45*1000)/200;
		document.getElementById("rcf14").onclick=function()
		{
			$("#f14").css({"visibility":"visible"});
		}
		document.getElementById("rcc14").onclick=function()
		{
			$("#f14").css({"visibility":"hidden"});
			if(!document.getElementById("rci14").value || document.getElementById("rci14").value==" ")
			{
				alert("Enter the value to proceed!");
			}
			else
			{
				if(Math.round(rc)==Math.round(document.getElementById("rci14").value))
				{
					document.getElementById("f14").style.visibility="hidden";
					document.getElementById("w14").style.visibility="hidden";
					document.getElementById("r14").style.visibility="visible";
					$("#rcf14").css({"visibility":"hidden"});
					$("#rcr14").css({"visibility":"hidden"});
					$("#rcc14").css({"visibility":"hidden"});
					document.getElementById("rci14").style="border:none; background-color:transparent; color:black; font-size:15px; width:55px;";
					document.getElementById("nextButton").style.visibility="visible";
				}
				else
				{
					count++;
					$("#w14").css({"visibility":"visible"});
					$("#r14").css({"visibility":"hidden"});
					if(count==2)
					{
						$("#rcr14").css({"visibility":"visible"});
					}
				}
			}
		}
		document.getElementById("rcr14").onclick=function()
		{
			$("#f14").css({"visibility":"hidden"});
			$("#w14").css({"visibility":"hidden"});
			$("#r14").css({"visibility":"hidden"});
			$("#rcf14").css({"visibility":"hidden"});
			$("#rcr14").css({"visibility":"hidden"});
			$("#rcc14").css({"visibility":"hidden"});
			document.getElementById("rci14").value=rc.toFixed(3);
			document.getElementById("rci14").disabled=true;
			document.getElementById("rci14").style="border:none; background-color:transparent; color:black; font-size:15px; width:55px;";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
		
	if(simsubscreennum==15)
	{
		$("#w14").css({"visibility":"hidden"});
		$("#r14").css({"visibility":"hidden"});
		var tab2=document.getElementById("tab15-1");
		var rows0=tab2.insertRow(0);
		var cells00=rows0.insertCell(0);
		var cells01=rows0.insertCell(1);
		var cells02=rows0.insertCell(2);
		cells00.style="font-weight:bold;";
		cells01.style="font-weight:bold;";
		cells02.style="font-weight:bold;";
		cells00.innerHTML="Chlorine dosage (mg/l)";
		cells01.innerHTML="Titration value (ml)";
		cells02.innerHTML="Residual chlorine (mg/l)";
		for(i=1;i<=25;i++)
		{
			var rows=tab2.insertRow(i);
			var cells0=rows.insertCell(0);
			var cells1=rows.insertCell(1);
			var cells2=rows.insertCell(2);
			cells0.style="font-size:14px;";
			cells1.style="font-size:14px;";
			cells2.style="font-size:14px;";
			cells0.innerHTML=dose[i-1];
			cells1.innerHTML=reading[p][i-1];
			cells2.innerHTML=((reading[p][i-1]*35.45*1000*0.0282)/(200)).toFixed(3);
		}
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},250);
	}
	
	if(simsubscreennum==16)
	{
		  if(p==0)
		  {
			xs=2;
			ys=(reading[p][4]*35.45*1000*0.0282)/(200);
		  }
		  if(p==1)
		  {
			ys=(reading[p][5]*35.45*1000*0.0282)/(200);
			xs=2.5;
		  } 
		  if(p==2)
		  {
			ys=ys=(reading[p][8]*35.45*1000*0.0282)/(200);
			xs=4;
		  }
		  if(p==3)
		  {
			ys=ys=(reading[p][7]*35.45*1000*0.0282)/(200);;
			xs=3.5;
		  }
		  if(p==4)
		  {
			ys=ys=(reading[p][16]*35.45*1000*0.0282)/(200);;
			xs=8;
		  }
		 
		  function displayGraph() 
		  {
			var chart = new CanvasJS.Chart("chartContainer",
			{      
			zoomEnabled: true,
			zoomType: "xy",
			// exportEnabled: true, //for save as JPEG, PNG options
			 
			 axisX: {
				title:"Chlorine dosage (mg/l)",
				interval: 1,
				titleFontSize:16,
				intervalType: "Number"
			  },
			  axisY :{
				title:"Residual chlorine (mg/l)",
				titleFontSize:16,
				includeZero: false
			  },
			  data: [
			  {      
				type: "spline",  
				indexLabelFontColor: "orangered",      
				dataPoints: type1DataPoints(),
				cursor: "pointer"
			  },
			  {        
				type: "line",
				lineDashType: "dash",
				dataPoints: [
				{ x:0, y: ys },
				{ x:xs, y: ys },
				{ x:xs, y: 0 }
				]
			  }
			 ]
			});
			chart.render();
		}
		function type1DataPoints(){
			var dataPoints = [];
			var h;
			for(var w = 0; w < 25 ; w ++){
				h = ((reading[p][w]*35.45*1000*0.0282)/(200));
				dataPoints.push({x: w/2 , y: h});
			}
			return dataPoints
		}
		document.getElementById("g1").onclick=function()
		{
			displayGraph();
			document.getElementById("chartContainer").style.visibility="visible";
			if(ccnt==0)
			{
				document.getElementById("q11").style.visibility="visible";
			}
			ccnt++;
		}
		
	document.getElementById("check1").onclick=function()
	{
		if(!document.getElementById("wa").value  || !document.getElementById("wa").value!=" " || !document.getElementById("tw").value  || !document.getElementById("tw").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n1 = document.getElementById("wa").value;
			n2 = document.getElementById("tw").value;
				
			if(Math.round(n1) == Math.round(xs))
			{
				// document.getElementById("check1").style.visibility="hidden";
				document.getElementById("r1").style.visibility="visible";
				document.getElementById("result1").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				document.getElementById("wa").style="border:none; background-color:white; color:black;"
				document.getElementById("wa").disabled="true";
				// document.getElementById("nextButton").style.visibility="visible";
			}
			if(Math.round(n2) == Math.round(ys))
			{
				// document.getElementById("check1").style.visibility="hidden";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("result1").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("tw").style="border:none; background-color:white; color:black;"
				document.getElementById("tw").disabled="true";
			}
			else if(Math.round(n1) != Math.round(xs))
			{
				// document.getElementById("result1").style.visibility="visible";
				document.getElementById("check1").style.visibility="visible";
				document.getElementById("w1").style.visibility="visible";
			}
			else if(Math.round(n2) != Math.round(ys))
			{
				// document.getElementById("result1").style.visibility="visible";
				document.getElementById("check1").style.visibility="visible";
				document.getElementById("w2").style.visibility="visible";
			}
			if(Math.round(n1) == Math.round(xs) && Math.round(n2) == Math.round(ys))
			{
				document.getElementById("check1").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			}
		}	
	}
  }
  if(simsubscreennum==17)
  {
	document.getElementById("chartContainer").style.visibility="hidden";
	document.getElementById("q11").style.visibility="hidden";
	document.getElementById("check1").style.visibility="hidden";
	document.getElementById("tw").style.visibility="hidden";
	document.getElementById("wa").style.visibility="hidden";
	document.getElementById("r1").style.visibility="hidden";
	document.getElementById("w1").style.visibility="hidden";
	document.getElementById("r2").style.visibility="hidden";
	document.getElementById("w2").style.visibility="hidden";
  }
}	

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==2)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 4mg/l to 7mg/l";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(xs>=0.2 && xs<=0.5)
		{
			str="suitable";
			str=str.fontcolor("green");
			document.getElementById("infAns").innerHTML="Permissible limit of residual chlorine in water is 0.2mg/l - 0.5 mg/l. The water sample given has residual chlorine value = "+xs+"mg/l, so it is "+ str +" for drinking.";
		}
		else 
		{
			str="not suitable";
			str=str.fontcolor("red");
			document.getElementById("infAns").innerHTML="Permissible limit of residual chlorine in water is 0.2mg/l - 0.5 mg/l. The water sample given has residual chlorine value = "+xs+"mg/l, so it is "+ str +" for drinking.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}

//step 1 simscreennum=1
function fillBodBottle1()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById("1-1cap").onclick=function()
	{
		myStopFunction();
		document.getElementById("1-1cap").onclick="";	
		document.getElementById("1-1cap").style.visibility="hidden";
		document.getElementById("1-1cap2").style.visibility="visible";
		
		setTimeout(function()
		{
			document.getElementById("1-1cap2").style.animation="openbodCap 1.2s forwards";
			setTimeout(function()
			{
			document.getElementById("1-1").style.visibility="hidden";
			document.getElementById("1-1bot").style.visibility="visible";
			},200);
			setTimeout(function()
			{
				document.getElementById("1-1cap2").style.visibility="hidden";
				document.getElementById("1-1cap3").style.visibility="visible";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:340px; top:340px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
				// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
				// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(0deg)";
					document.getElementById("1-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("1-3").onclick="";	
						document.getElementById("1-3").style.visibility="hidden";
						document.getElementById("1-5").style.visibility="hidden";
						document.getElementById("1-3fill").style.visibility="visible";
						// document.getElementById("1-1samp2").style.visibility="visible";
					    document.getElementById("1-3fill").style.animation="moveCyl 1.25s forwards";
						setTimeout(function()
						{
							document.getElementById("1-3fill").style="position:absolute; left:270px; top:60px;";
							document.getElementById("1-3fill").style.transformOrigin="80% 100%";
							document.getElementById("1-3fill").style.animation="rotateCyl 1.25s forwards";
							setTimeout(function()
							{
								document.getElementById("1-34").style.visibility="visible";
								document.getElementById("1-33").style.visibility="visible";
								document.getElementById("1-3fill").style.visibility="hidden";
								document.getElementById("1-1samp2").style.visibility="visible";
								document.getElementById("1-1samp2").style.animation="sampleUp2 1.5s forwards";
								setTimeout(function()
								{
									document.getElementById("1-34").style.visibility="hidden";
									document.getElementById("1-33").style.visibility="hidden";
									document.getElementById("1-3fill").style.visibility="hidden";
									document.getElementById("1-32").style.visibility="visible";
									
									setTimeout(function()
									{
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("1-1cap3").onclick=function()
										{
											myStopFunction();
											document.getElementById("1-1cap3").onclick="";	
											document.getElementById("1-1cap3").style.visibility="hidden";
											document.getElementById("1-1cap22").style.visibility="visible";										
											document.getElementById("1-1cap22").style.animation="closebodCap 1.5s forwards";
											setTimeout(function()
											{
												document.getElementById("1-1bot").style.visibility="hidden";
												document.getElementById("1-1").style.visibility="visible";
											},1000);
											setTimeout(function()
											{
												document.getElementById("1-1cap22").style.visibility="hidden";
												document.getElementById("1-1cap").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("1-32").style.visibility="hidden";
													document.getElementById("1-43").style.visibility="hidden";
													document.getElementById("1-4cap").style.visibility="hidden";
													$("#1-6").fadeIn(500);
													document.getElementById("b1-1").onclick=function()
													{
														//document.getElementById("nextButton").style.visibility="visible";
														document.getElementById("1-6").style.visibility="hidden";
														validateAnswer(2,1,"150px","100px");
													}
												},500);
											},1550);
										}
									},150);
								},1750);
							},1300);
						},1250);
					}
				},100);
			},1250);
		},100);
	}
}

//step 2 simscreennum=2
function addAlum()
{
	$("#2-92").css({"visibility":"visible","position":"absolute","left":"190px","top":"60px"});
	$("#2-96").css({"visibility":"visible","position":"absolute","left":"205px","top":"185px"});//solution grey
	$("#2-97").css({"visibility":"hidden"});
	$("#2-81").css({"visibility":"hidden"});
	$("#2-82").css({"visibility":"hidden"});
	$("#2-71").css({"visibility":"hidden"});
	$("#2-93").css({"visibility":"visible","position":"absolute","left":"550px","top":"100px"});
	$("#2-94").css({"visibility":"visible","position":"absolute","left":"602px","top":"208px"});
	$("#2-95").css({"visibility":"visible","position":"absolute","left":"614px","top":"220px"});
	// 0.5ml beaker2
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:280px; height:25px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
	document.getElementById("arrow1").style.msTransform="rotate(90deg)";
	document.getElementById("arrow1").style.transform="rotate(90deg)";
	$("#2-95").click(function()
	{
		myStopFunction();
		$("#2-95").off("click");
		$("#p2-4").css({"visibility":"hidden"});
		$("#drop2-1").css({"visibility":"visible","position":"absolute","left":"206px","top":"285px"});
		document.getElementById("p2-3").innerHTML="";
		document.getElementById("p2-3").innerHTML="0ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.5ml";
		document.getElementById("drop2-1").style.animation="drop1 1.2s 3";
		$("#2-31").animate({"position":"absolute","top":"384px"},3600);
		setTimeout(function()
		{
			$("#2-96").css({"position":"absolute","top":"228px"});
			$("#drop2-1").css({"visibility":"hidden"});
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:190px; top:140px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#2-92").click(function()
			{
				myStopFunction();
				$("#2-92").off("click");
				$("#2-92").animate({"position":"absolute","left":"275px","top":"100px"},500);
				$("#2-96").animate({"position":"absolute","left":"290px","top":"234px"},500,				
				function()
				{
					//closing bottle 2
					myInt=setInterval(function(){animatearrow();},500);
					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:170px; top:390px; height:30px; z-index:10;"
					document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
					document.getElementById("arrow1").style.msTransform="rotate(270deg)";
					document.getElementById("arrow1").style.transform="rotate(270deg)";
					$("#2-100").click(function()
					{
						myStopFunction();
						$("#2-100").off("click");
						$("#2-100").css({"visibility":"hidden"});
						$("#2-99").css({"visibility":"visible"});
						$("#2-99").animate({"position":"absolute","left":"184.5px", "top":"215px"},850,
						function()
						{
							$("#2-99").css({"visibility":"hidden"});
							$("#2-98").css({"visibility":"visible"});
							$("#2-98").animate({"position":"absolute","top":"245px"},300,
							function()
							{
								$("#2-98").css({"visibility":"hidden"});
								$("#2-33").css({"visibility":"visible"});
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:408px; top:293px; height:30px; z-index:10;"
								document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
								document.getElementById("arrow1").style.msTransform="rotate(270deg)";
								document.getElementById("arrow1").style.transform="rotate(270deg)";
								$("#2-53").click(function()
								{
									myStopFunction();
									$("#2-53").off("click");
									$("#2-53").css({"visibility":"hidden"});
									$("#2-98").css({"visibility":"visible","position":"absolute","left":"346px","top":"243.5px"});
									$("#2-98").animate({"position":"absolute","top":"215px"},300,
									function()
									{
										$("#2-98").css({"visibility":"hidden"});
										$("#2-99").css({"visibility":"visible","position":"absolute","left":"346px","top":"215px"});
										$("#2-99").animate({"position":"absolute","left":"420px","top":"350px"},850,
										function()
										{
											$("#2-99").css({"visibility":"hidden"});
											$("#2-100").css({"visibility":"visible","position":"absolute","left":"435px","top":"385.5px"});
											myInt=setInterval(function(){animatearrow();},500);
											document.getElementById("arrow1").style="visibility:visible; position:absolute; left:272.5px; top:160px; height:30px; z-index:10;";
											document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
											document.getElementById("arrow1").style.msTransform="rotate(180deg)";
											document.getElementById("arrow1").style.transform="rotate(180deg)";
											$("#2-92").click(function()
											{
												myStopFunction();
												$("#2-92").off("click");
												$("#2-92").animate({"position":"absolute","left":"352.5px","top":"60px"},500);
												$("#2-96").animate({"position":"absolute","left":"368px","top":"194px"},500,
												function()
												{
													$("#p-24").css({"visibility":"visible","position":"absolute","left":"600px","top":"300px"});
													myInt=setInterval(function(){animatearrow();},500);
													document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:280px; height:25px; z-index:10;";
													document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
													document.getElementById("arrow1").style.msTransform="rotate(90deg)";
													document.getElementById("arrow1").style.transform="rotate(90deg)";
													$("#2-95").click(function()
													{
														myStopFunction();
														$("#2-95").off("click");
														$("#p2-4").css({"visibility":"hidden"});
														$("#drop2-2").css({"visibility":"visible","position":"absolute","left":"370px","top":"285px"});
														document.getElementById("p2-3").innerHTML="";
														document.getElementById("p2-3").innerHTML="0ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.5ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1ml";
														document.getElementById("drop2-2").style.animation="drop1 1.2s 5";
														$("#2-96").animate({"position":"absolute","top":"200px"},5000);
														$("#2-51").animate({"position":"absolute","top":"383px"},5000);
														setTimeout(function()
														{
															$("#drop2-2").css({"visibility":"hidden"});
															$("#2-93").css({"visibility":"hidden"});
															$("#2-94").css({"visibility":"hidden"});
															$("#2-95").css({"visibility":"hidden"});
															$("#2-96").css({"visibility":"hidden"});
															$("#2-92").fadeOut(500,
															function()
															{
																//closing bottle 3
																myInt=setInterval(function(){animatearrow();},500);
																document.getElementById("arrow1").style="visibility:visible; position:absolute; left:480px; top:390px; height:30px; z-index:10;"
																document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																document.getElementById("arrow1").style.transform="rotate(270deg)";
																$("#2-100").click(function()
																{
																	myStopFunction();
																	$("#2-100").off("click");
																	$("#2-100").css({"visibility":"hidden"});
																	$("#2-99").css({"visibility":"visible"});
																	$("#2-99").animate({"position":"absolute","left":"346px", "top":"215px"},850,
																	function()
																	{
																		$("#2-99").css({"visibility":"hidden"});
																		$("#2-98").css({"visibility":"visible"});
																		$("#2-98").animate({"position":"absolute","top":"245px"},300,
																		function()
																		{
																			$("#2-98").css({"visibility":"hidden"});
																			$("#2-53").css({"visibility":"visible"});
																			$("#2-101").fadeIn(500,
																			function()
																			{
																				$("#b2-1").click(function()
																				{
																					
																					$("#2-103").css({"visibility":"visible"});
																					$("#2-104").css({"visibility":"visible"});
																					$("#2-105").css({"visibility":"visible"});
																					$("#2-101").fadeOut(500,
																					function()
																					{
																						table();
																					}
																					);
																				});
																			}
																			);
																		}
																		);
																	});
																});
															}
															);
														},6000);
													});

												}
												);
											});
										}
										);
									}
									);
								});
							}
							);
						}
						);						
					});
				}
				);	
			});
		},2400);
	});
}
//dynamically creating table rows
function table()
{
	document.getElementById("tab22-1").style.visibility="visible";
	var tab1=document.getElementById("tab2-1");
	var row0=tab1.insertRow(0);
	var cell00=row0.insertCell(0);
	var cell01=row0.insertCell(1);
	cell00.innerHTML="Sample Bottle";
	cell01.innerHTML="Chlorine added (ml)";
	for(i=1;i<=26;i++)
	{
		var row=tab1.insertRow(i);
		var cell0=row.insertCell(0);
		var cell1=row.insertCell(1);
		cell0.innerHTML=i;
		cell1.innerHTML=(i-1)/2;
	}
	setTimeout(function()
	{
		document.getElementById("nextButton").style.visibility="visible";
	},250);
}

//canvas 9, 11, 13
function startTitration()
{
	setTimeout(function()
	{
		document.getElementById("p"+tn+"-0a").style.visibility="visible";
		document.getElementById("p"+tn+"-1").style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(300deg)";
		document.getElementById(tn+"-1knob").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-1knob").onclick="";	
			document.getElementById(tn+"-1knob").style.visibility="hidden";
			document.getElementById(tn+"-1hand").style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById("p"+tn+"-0a").style.visibility="hidden";
				document.getElementById(tn+"-1hand").style.visibility="hidden";
				document.getElementById(tn+"-1hand2").style.visibility="visible";
				document.getElementById(tn+"-1stopper").style="position:absolute; left:153px; top:300px;";
				setTimeout(function()
				{
					document.getElementById("drop"+tn+"-1").style.visibility="visible";
					document.getElementById("drop"+tn+"-1").style.animation="drop2 0.75s 10";
					document.getElementById(tn+"-1a").style.animation="Na2S2O3fromBurette1 10s forwards";
					setTimeout(function()
					{
						document.getElementById("drop"+tn+"-2").style.visibility="visible";
						document.getElementById("drop"+tn+"-2").style.animation="drop2 0.75s 10";
						setTimeout(function()
						{
							document.getElementById(tn+"-3").style.animation="colourChange2 8s forwards";
							setTimeout(function()
							{
								document.getElementById("p"+tn+"-0c").style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById("drop"+tn+"-1").style.visibility="hidden";
									document.getElementById("drop"+tn+"-2").style.visibility="hidden";
									document.getElementById(tn+"-3").style.backgroundColor="#f4c2c2";						
									setTimeout(function()
									{
										blueToColourlessTitrarion();
									},750);
								},4000);
							},2500);
						},1000);
					},250);
				},100);
			},250);
		}
	},500);
}	
function blueToColourlessTitrarion()
{
	setTimeout(function()
	{
		document.getElementById("drop"+tn+"-4").style.visibility="visible";
		document.getElementById("drop"+tn+"-4").style.animation="drop2 0.75s 10";
		document.getElementById(tn+"-1a").style="position:absolute; left:142px; top:100px; ";
		document.getElementById(tn+"-1a").style.animation="Na2S2O3fromBurette3 10s forwards";
		setTimeout(function()
		{
			document.getElementById("p"+tn+"-0c").innerHTML="Observe the change in  colour of solution from light pink to colourless";
			document.getElementById("drop"+tn+"-5").style.visibility="visible";
			document.getElementById("drop"+tn+"-5").style.animation="drop2 0.75s 10";
			setTimeout(function()
			{
				document.getElementById(tn+"-3b").style.visibility="visible";
				document.getElementById(tn+"-3b").style.animation="colourChange3 8s forwards";
				setTimeout(function()
				{
					document.getElementById("p"+tn+"-0b").style.visibility="visible";
					document.getElementById("p"+tn+"-0b").innerHTML="Close the knob when the colour of solution changes to colourless";
					setTimeout(function()
					{
						document.getElementById("drop"+tn+"-4").style.visibility="hidden";
						document.getElementById("drop"+tn+"-5").style.visibility="hidden";
						document.getElementById(tn+"-3b").style.backgroundColor="#FFFFFF;";
						document.getElementById(tn+"-1hand").style.visibility="visible";
						document.getElementById(tn+"-1hand2").style.visibility="hidden";
						document.getElementById("p"+tn+"-0b").style.visibility="hidden";
						document.getElementById("p"+tn+"-0c").style.visibility="hidden";
						document.getElementById(tn+"-1stopper").style="position:absolute; left:150px; top:298px; ";
						setTimeout(function()
						{
							document.getElementById(tn+"-1hand").style.visibility="hidden";
							document.getElementById("p"+tn+"-3").style.visibility="visible";
							if(tn==9)
							{
								document.getElementById("p"+tn+"-3").innerHTML="Final burette reading = "+reading[p][0]+ " ml";
								validateAnswer(3,2,"400px","350px");
							}
							if(tn==11)
							{
								document.getElementById("p"+tn+"-3").innerHTML="Final burette reading = "+reading[p][1]+ " ml";
								document.getElementById("nextButton").style.visibility="visible";
							}
							if(tn==13)
							{
								document.getElementById("p"+tn+"-3").innerHTML="Final burette reading = "+reading[p][2]+ " ml";
								document.getElementById("nextButton").style.visibility="visible";
							}
						},750);
					},4000);
				},2500);
			},1000);
		},250);
	},100);
}
