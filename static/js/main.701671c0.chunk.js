(this.webpackJsonpbingnews=this.webpackJsonpbingnews||[]).push([[0],{22:function(e,c,t){},44:function(e,c,t){"use strict";t.r(c);var n=t(2),r=t(16),o=t.n(r),a=(t(22),t(3)),l=t.n(a),i=t(5),s=t(4),A=t(17),d=t.n(A),b=function(){var e=Object(i.a)(l.a.mark((function e(c,t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"https://bing-news-search1.p.rapidapi.com/news/search",params:{q:c,safeSearch:"Off",textFormat:"Raw",freshness:t,mkt:"es-MX",count:"100"},headers:{"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"a23e8c4b5cmshf7d9c6feadc8dcfp14d782jsnd242b383d0fe"}},e.prev=1,e.next=4,d.a.request(n);case 4:return r=e.sent,e.abrupt("return",r.data.value);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(c,t){return e.apply(this,arguments)}}(),g=b,h=t(0),x=function(e){var c=e.fetchNoticias,t=Object(n.useState)(!0),r=Object(s.a)(t,2),o=r[0],a=r[1];return Object(h.jsx)("div",{className:"container mx-auto",children:Object(h.jsxs)("nav",{className:"flex items-center justify-between m-5 flex-wrap bg-white lg:m-0",children:[Object(h.jsx)("div",{className:"flex items-center flex-shrink-0 text-black lg:mr-10",children:Object(h.jsxs)("p",{className:"text-xl  font-black tracking-tight",children:["Bing ",Object(h.jsx)("span",{className:"text-secondary",children:"News"})]})}),Object(h.jsx)("div",{className:"block lg:hidden",children:Object(h.jsx)("button",{className:"flex items-center px-3 py-2 border rounded text border-gray-200",onClick:function(){a(!o)},children:Object(h.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("title",{children:"Menu"}),Object(h.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),o&&Object(h.jsx)("div",{className:"hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto ",children:Object(h.jsxs)("div",{className:"text-lg text-black lg:flex-grow ",children:[Object(h.jsx)("button",{onClick:function(){c("Noticias","Day")},className:"block lg:inline-block p-5  border-b-2 border-gray-100 lg:border-white lg:hover:text-white hover:bg-secondary",children:"Home"}),Object(h.jsx)("button",{onClick:function(){c("Negocios","Week")},className:"block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white visited:bg-secondary",children:"Negocios"}),Object(h.jsx)("button",{onClick:function(){c("Entretenimiento","Week")},className:"block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white",children:"Entretenimiento"}),Object(h.jsx)("button",{onClick:function(){c("Economia digital","Week")},className:"block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white",children:"Econom\xeda Digital"})]})}),!o&&Object(h.jsx)("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto ",children:Object(h.jsxs)("div",{className:"text-lg text-black lg:flex-grow ",children:[Object(h.jsx)("button",{onClick:function(){c("Noticias","Day")},className:"block lg:inline-block p-5  border-b-2 border-gray-100 lg:border-white lg:hover:text-white hover:bg-secondary",children:"Home"}),Object(h.jsx)("button",{onClick:function(){c("Negocios","Week")},className:"block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white visited:bg-secondary",children:"Negocios"}),Object(h.jsx)("button",{onClick:function(){c("Entretenimiento","Week")},className:"block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white",children:"Entretenimiento"}),Object(h.jsx)("button",{onClick:function(){c("Economia digital","Week")},className:"block lg:inline-block p-5 border-b-2 border-gray-100 lg:border-white hover:bg-secondary hover:text-white",children:"Econom\xeda Digital"})]})})]})})},j=function(){var e=Object(n.useState)([]),c=Object(s.a)(e,2),t=c[0],r=c[1],o=Object(n.useState)(""),a=Object(s.a)(o,2),A=a[0],d=a[1];Object(n.useEffect)((function(){b("Noticias","Day")}),[]);var b=function(){var e=Object(i.a)(l.a.mark((function e(c,t){var n,o,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(c,t);case 2:n=e.sent,o="Week"===t?t="la Semana":"Hoy",a="Noticias"===c?c="":"en ",d("Noticias de ".concat(o," ").concat(a," ").concat(c)),r(n);case 7:case"end":return e.stop()}}),e)})));return function(c,t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{fetchNoticias:b}),Object(h.jsx)("div",{className:"bg-gray-100",children:Object(h.jsxs)("div",{className:"container mx-auto px-5 lg:px-0",children:[Object(h.jsx)("h1",{className:"text-secondary pt-5 font-bold text-xl",children:A}),Object(h.jsx)("div",{className:"flex flex-col mx-auto lg:flex-row lg:flex-wrap",children:t.map((function(e,c){return Object(h.jsxs)("div",{className:"flex flex-col md:flex-auto md:  w-full border rounded-md my-7 shadow-lg lg:w-cards lg:mr-5 lg:flex-auto  flex-nowrap",children:[e.image?Object(h.jsx)("img",{className:"rounded-t-md h-48",src:e&&e.image?e.image.thumbnail.contentUrl:"",alt:e.description}):Object(h.jsx)("img",{className:"object-cover h-48",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5QkFBhERjXfNggAAE11JREFUeNrtncuvJcddxz+/X3WfOw/PeMaPMHYcOzgP4tgxIiQRgSARKw8JEZCIhLJBiCwQsISs4F9ghwRikRUSCSzCAiEkEIsIyRYkhChIQZGQQ+J4nEDsOLbncc/pqh+Lqj733Fd7Zu45p6vv/D6jM/fevmfmdFfXt6t+Vb+H/O2Vj3wjiD7QkXAcJ6MIyUgNIldU5AE1HfucHKcaFDBIjWFdZ0ZnScY+KcepBUXMIDWrB0VcI45jGFj+3udVjjOAC8RxBnCBOM4ALhDHGcAF4jgDuEAcZwAXiOMM4AJxnAFcII4zgAvEcQZwgTjOAC4QxxnABeI4A7hAHGcAF4jjDOACcZwBXCCOM4ALxHEGcIE4zgAuEMcZwAXiOAO4QBxnABeI4wzgAnGcAVwgjjOAC8RxBnCBOM4ALhDHGcAF4jgDuEAcZwAXiOMM4AJxnAFcII4zgAvEcQZwgTjOAC4QxxnABeI4A7hAHGcAF4jjDOACcZwBXCCOM8CoArHyOvyDM2lO0b1sxvpgAwQDAxNAVn8r+390JoUJHFSIrPw9JUYRiAFihiEgoNYfy01oAin/1pkYRr6fgmCyJxMrN3Nq93S0EQRyoymCxcRNNZqkJBFC7DA5JWP0XUgkgAmxFSxFdkwgjH1Wd8YoApHylwCpS9hbLvG2X3w/9z/8MPMAmhIip2Yae9chooBgKfHGC1e5+i//Dj98DQ1gMq3p86gjCF2ivf8+fur3P8Pjn/4k4eJ5khgiWhrZJTJJzEiWp8jpldd5/q//gf/88y+SXnsNlSnJY0yBGMQYeeCpd/HIp55BfuIy0YyEICJupk8YMeMGidaMcOUSj336E/zPl/+N15/7DzCDCYlk3BEkGe2Fe+Ce85AgRFDNtom4DTJZJEIrEJKBKOniec5cvsgbY5/YHTCeQASMPBQHsrEuYsuR49DKrzMZDGhFUVUQSJJFM0XGHUEEkoIKiBommpd6Zbrr5g55vR7B1FDJ93eqLhvjCuRIJrpg7mQMljfPmJS9cRRTFbZzyrBjvx/XFq1wBHHuFnrviTwh2zsqkhe7oOzIF5EIsvWZhQvEGYXeF2/VxagLWQSa9kYOFVn6PkrvuLdFkfgUyxkHK+OG5JeZsdsInYImCNogokTALO+NsTKabAsfQZxxEMAM64yFGQ2C3Ew0neU9sabBzIgCqoLEVNb+tzvHcoE445AMZi0P/tLPct+T70ZTwsz40Uv/y4vPfhX5/iuc1YYYyghiMooDqwvEGYdkWNtw3yc/zHs+8yuoZsv85hvXuPSFv+Obf/ZXpP+7ThsCC2y0nePp2CAGZrZ8RcjzU39t7ZXKyw7+4g4RgzYFNDRoO4O25ex9l3nHLz/DpSfeQYwd0iWwvBuf3S/cBjmMZdMsWcIMgimdGmbZ58cdf7dDStnNQQUsAQYS7syttA+sCqn/CdQku8Pfe4HzFy7xWqNESYgFkEB+JG6XaQgkW3REMQSFBG15mixH3mlv2FaPpeJ8GPKqUxIrAW92As/rvSHIMJQ8QgFIYhlxKiL5U0ZwBJ6GQMrIagaaIpaMznKDKoJ1Y5/g6SdJDpHWLuYHUxMwzYFRJ2PFLWVly9AqeeBNQyDlKRPmxsvPfZ0X/vlZmM8JYnSieX7qU6yNoqoEE6xLpLMtj338F7j8wffBTruRz6sl2mESAjGDVDaUXv7mf/Nfn/8S7Y2beS6siokrZLPktlcTmt3E9XvPcvFtD3H559635lavZNhYYRICocx1rRFaVXZUkDYgQWlqGYtPObFM/huEM5pHFA1hfTaBbH+F6laYhED6AFwrKygqhmmOW8/Gomd42ChFBJqg0wRiJLL9tzYqFAdMRCDw5svuEw87qBo74G/Lyk/rzR1w+HPGZjobhc5dRS0z58kIRA58Xd0AqaQtTy1jtLCvYt0GRk4HhBnREotkNJ1hmn9Ty9PmdCNggiSItrdtYSfaKNz/39d4IychECg3ooukpqG7dJHZta6sPkbPwrhhhLzMHk3RaHT3nkVCgBQhTKYL3RGTuboA0DS85UNP86E//G3azrLx6H4m26GswopBNws8+IEnSRrWN0c/sJNeCxMRSI44MxEuPvVOLrz38RJhZmWpsa5GPZ0YaS/wFVOlE6HdlH9UJbd0EgIRo8x/DdNAahQrf0CracxTi/VfUtn/UEISSMXJdoOfOTaTEEjRB6lkBpeUk5HR16AwryWycSxvDDasGHxrb/T67uIkBILkUUR11eRYzb1YX8OeOpb5/AQ2sSjiriZ3zmo9kZUjzois/Q5UKA6Y0EahczewJ5JatkRcIE6V+E767WJ9aCb0O4OVPGRu5yJWvpOVef3Bd5VUm7byPjv6vZs5S9vn07Ovs06v0U/EdAQCOVWMCBFobC853xRumhVfZEnkmO5yVA9sdBo5GcVqms0+Tltte1OPvXSf+aeN23/uanLnGCXlT0plKUv22rK+Nj107gJlk81yMRlkrwbKEZvH/R5PX89v6ea/hbS0ZWep+FmtfGZ9m9xbYRIC6TvWohH0+k3s2i4x5Fw/JRK3fhJYBC6fxZoGNcleACU58+oT2kr1LeYd3Y9K4bIg2DZKKRuktqU5dxYNurK6tOFGPuhqUsk9nYZADAKKdh1Xv/xVvv03/0i3mNNYSQOk9XsrRjPkgUu8/3O/xblHrpBSzjsb5HBknpXH9/XvvMhX/uKLxKs/pG0CTdxsrzEMkvHwr3+Mt//aM2jQldHLtrrnVMvtnIZAegRe++5LvPRPzzHvbrCjAelsGS9dKwLEZIRHrtD93m9gFMEc1dnMCOV4evV1Xn72a/CtF5CmyWnTNtlzyjT23E+/i5QSgVWbSLZaecBXsW6Xktm7NWFGSSIg0KjmGodjn9+bnb5ZLlIactG+nCHysEiEvsSfkERoOyOlnLQiyGb9zvrcYyErYm/WwxbKcriRfudIP0KIoBhROhrLqSr7pA2VPHCOPn9yWesmdojlFBSNKHrkYzL71RiwCBBMiCokPTo2fN2YrgZDASao7vnB3W1MQiCwkrThoLlRlnlrv3nLlaD+5+N8j5bLvntikBVfm01epx17dAutW2k8yIR30utqyDfjUOe7Vd8j66c+Vo/lugVqmW1NZgS5a9m/kb7MdL/2j6lsocON9Dukrtt40itJh47u6/5mdDHRxZhLPGyasopldpQfT1+OdpN3oL67OzmBnHqWmUKg3ZnRPvF2ws4ZZiFgFjf7aDWwlGgfup+kQmO2nOropp/oHg/i3CpiCRPjnkev8OHPfRa9GbNP1sZ7KWDQPPwgTcjb9iK5wqxtuvNWKA6YoEDqbMY7vZLjphT5aar3nOfSz7xnmXlqrblwB0/tcCtvx0apbxVrcgI5PRxTskEk11pKefc6WvE3S7I9y7WP8++dJVcEU5sxv2kmJ5DTdXvsyGOpjBkagZBLIEuyLd4t2ROCHcjrY/u+TMNR9ARMTiCnnuL3JNq7+UMHNCo5RmRLHVJKLjLKDrpZrlOY9yxtLw7HZD0icVcT51YQBDVb+kU1/Sah5kKW2+lEtrLcLPknEaLmupBiuVZIMYxONZMTyGk30q0Up0lmiJY8YKWT5n+y7RbYC/9tV84vFpMorMuw9ngQ55awUg9eQPvpTektOmKnWY1u7sNvjMR2djDHY3ICqeTBsqYrSUcebxAsJdLuLq/+8GWYRwKKjeh/sQyWshzduXP/RfTieRpKYvF1U8lUYXICuRswEUSUa89/j6/8yedZPH+VmTYswji9xoCAEJLQxUi8sMMTn/00j37qo+vLzVtpDQsXSG30Lu0q3Jzf4MbXv8X8+e9yvQ1ZOCN0oj55gyaBFInnduheeYam0TVWn6pQHUxQIHU2450ixxwRTAxRRduGsDODNpSovnEmmUbxx4oKszYX0Fl3/c4Kd9JPt4VVNbcu9bHjQWxld3Bbp1DLlogLZDRusQeUtEbjunh4Ec/JUMmDZU3YmxxZjQ7Ju9ob96o9it5+FkGWi71rLhPiO+nOLbEaD5Jg0ULShKqOan/1mZFnSbghgZTyhqGwrmXeY5w3R8YFUiGR0vE6WOwuSNd22WkSiRGztwjsmtF1cG2nIcaU8wzrunbS92cDroXJCaS+Z8xJruSIziCWs7obhMsXeewTHyG+9900IZBG3CtIChGBCOn8DhcefxtdMppNJcyqRCeTE8jp4ZgpRSm1nMzY+cmH+cAf/S4ppfIvRuw1K4nkREB3ZsRN9p5KnoSTE0glD5Y1cVzAVI4HCSEg95zDoMz31+RafoIzzf6ShpgRlv7vp5fJCeRuIDsp9mZxcVQsvxujPx5yIl4msltjELCvYjmHOXonPfe/ejrLao2fpdPigcI/p5XJbRRWMjX1K1k3q5myqWcwmZxAnLuDSvQxPYHU0nDruZKBUaTyAcZWXhv7gApwG6QyljON/pu0xfK2t3R2eb2307yM0K7VVqriIvfhAqmQVNZ1ux//mB/86zfobl5HVVBrD3hBbYdcdsJAOiQpQVrOPPU45x9/NL9hLVlNPPXoWqivCU/CUT0rh7SqwrUXvs/X/vQv2f32i8xE0BEt11Ri5OlAzp/jyT/4Te577BGkWVNIYYXigAkK5PRgb/I7Ie3OsR+8Snv1VbQV5ppu9T9fO7nClNJ2Qrq2S9zdxbTUfl9rVGEZIyuZbZ0KgRys3lQdR93s46YUlv3/BLBG0EZZzASbhVwfbaSOIyKIlT3+UE50g3s1Hg9yO/QPltKhTHJIqil57N/wzVr7tZRLOfKMRZZLi0EVMUNLXIjaODHpULRpkMToGkhB1utb7DvpJ2HPE0gRJCnJcoFLk81UXFr7FUgpxFlSJkpJSn0QwbJBbIlOEolU/l2OCVltja0ioKokEkZCNK8kZDnX17HXxTQEIpAwOkoKmgRiiqTSmSoNtlm9gD59aJJEJ4Ko5RHhqLeXNCImggWhU9BGINpotmwuDw3aGboDFhMLM1pdkwVSadKGaQiEPmctEME0MKeDIOzELJjaGnYVEwgRdnaNYIr2hTlLh5CDb045O4J0hnagUdCgaLLRplidwm4QQlIk5q8B3VyfruR2TkMg/U1IxsISN+dzbNERLLFQWeMqygYvYdHBYo5FI+SknUd2grznUDI1IDCP8PpN7EzDQnW8ebpAiMY8JbqgRDPUJueIcdtMQyD0QUTChbe/lcd+9aMkOlozFlLs9IoRYJ46msv3Mr93Z5lw1I6xQ1KJCbHLF3jrxz/M/Ol3EncCacQ8uIrRRGNhoGfOcuGxR+hiotENraxVMmOejEAMoA08+MwHefDnn8ZCFo3Vbn4sz99y1NOF89mOkuPTHQTyWy89+jCX//h3sDJwjLucbUsXd0mCnt3B2jUmj/PUoyegZDmfCXDuDHLuzNhndMccijs6fKl5LwRh1rTIffeOfcpveh21/o/rYBoCoRqbbTvXsaE8CFu/jtuh0lWs029lOc4JcIE4zgAuEKcOKo1xd4E4lVCfOMAF4tTCMvVoXbhAnCqpxbHXBeJUSS3xIC4Qpw7cSHec6eECcergQGbFWnCBOFXiRrrjAMeNGpXooyZnxX3pw50ps1fnc/+xI98q+7PZ9++zOrrCKALp600kEW6qkLpESok+7VOdW0bO7dBPTUzA5sZcDrv6mwjzxvK9j5FEjlKURSRqwjBCUjoxNMdV52wwW1TOqCOIhkD37Rf57hf+nnRuxmyRWCiYCiG5RKZKEgiiJAwTaF6bs/udl/bXehfBYuSV577Od+aReciPxZkF4huv8+r3XkRKiLFZglhqxW85vZN86aGPXFX0SmdJtlas3gwTQZIRUG7u5OdNM4/sNoKq0kYfR6aIAR0GojkhkOZsLNJFVPKoIf39L/UYuyB0TUmGnSC1StdFZh2oGSo5P1gqKZE2nYPAMNTEDLqRRpA+bE6IKaI35jQmtAkkgoXxEqQ5J0OAsyak2KEiBBHmYqQmlLmzLbNKighNMmTe0Sz2Ss3ZdZjtNMzVsAjElCUxwpLSODaIZOPMzOhECLMdOiCakcyWSRhkIvHmzn7UlBgScxVmJiTL2Whm5dnfJztKGNcaUG3Rfiolys7CiCZEjJkqakYUQ9aaB/jWGEUguZHyE2SWIHUR03z5DYKkenxxnNtHU8r5e80gGi2ChpAFwL6FqryKlXLl3H71JkrJcI+gJTmgyTh9YkQjfS+Lt5Dnmr07jlHPRpFz+6SS7KSxXFckAqSS4mhlOVfp7RArh7JIcupVmOXa15jl2dXWbOQVRhPIcvbUp5JhZTbl4jgV9Eu5/Z09anq0P2e1LL+uvnPMvOSjLvPe4l6SM2Fk5e/h99SJu5o4zgAuEMcZwAXiOAO4QBxnABeI4wzgAnGcAVwgjjOAC8RxBnCBOM4ALhDHGcAF4jgDuEAcZwAXiOMM4AJxnAFcII4zgAvEcQZwgTjOAC4QxxnABeI4A7hAHGcAF4jjDOACcZwBXCCOM4ALxHEGcIE4zgAuEMcZwAXiOAO4QBxnABeI4wzgAnGcAVwgjjOAC8RxBnCBOM4ALhDHGcAF4jgDuEAcZwAXiOMM4AJxnAFcII4zwL466VYKvjuOk2nERFVAEdeH4xQUIWLaGLZIJl0CZOyzcpxKSHk+Ff8fvwRoBP0aCbkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMDVUMDY6MTc6MTcrMDA6MDA1FGeNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTA1VDA2OjE3OjE3KzAwOjAwREnfMQAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAyNTLuroAAAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADI1Mn1f0F0AAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYzMDgyMjYzNwHe29QAAAARdEVYdFRodW1iOjpTaXplADc2MTFCLDY9ygAAADV0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL3RtcC90aHVtYmxyL2ltZzQ5OTc2MzEzNzAyNzY2NzU4NTUnLd7+AAAAAElFTkSuQmCC",alt:"Imagen alusiva a noticias"}),Object(h.jsxs)("h1",{className:"mx-3 my-2 font-bold ",children:[" ",e.name]}),Object(h.jsx)("p",{className:"mx-3 mb-5 truncar",children:e.description})]},c+e.description)}))})]})})]})};var m=function(){return Object(h.jsx)(j,{})};o.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.701671c0.chunk.js.map