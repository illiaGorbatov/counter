(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},16:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),r=n(4),i=n.n(r),s=(n(16),n(1)),l=(n(3),n(2)),c=Object(l.b)((function(e){return{isFirstVersion:e.isFirstVersion,maxValue:e.maxCounter,minValue:e.minCounter,counterNumber:e.counter}}),null)((function(e){var t=e.alertMonitor?"text-copy":"text-copy-alert";return u.a.createElement("div",{className:"counterDisplay"},u.a.createElement("div",{className:e.alertMonitor?"number":"number alertNumber"},e.isFirstVersion?e.counterNumber:u.a.createElement("svg",{viewBox:"0 0 960 600"},u.a.createElement("symbol",{id:"s-text"},u.a.createElement("text",{textAnchor:"middle",x:"50%",y:"80%"},e.counterNumber)),u.a.createElement("g",{className:"g-ants"},u.a.createElement("use",{xlinkHref:"#s-text",className:t}),u.a.createElement("use",{xlinkHref:"#s-text",className:t}),u.a.createElement("use",{xlinkHref:"#s-text",className:t}),u.a.createElement("use",{xlinkHref:"#s-text",className:t}),u.a.createElement("use",{xlinkHref:"#s-text",className:t})))),u.a.createElement("div",{className:"flex"},u.a.createElement("div",{className:"currentSettings"},"Current min value:",u.a.createElement("div",{className:"currSetVal"},e.minValue)),u.a.createElement("div",{className:"currentSettings"},"Current max value:",u.a.createElement("div",{className:"currSetVal"},e.maxValue))))})),o=function(e){return u.a.createElement("button",{onClick:e.onClickHandler,disabled:e.disableMonitor},e.buttonProperty)},m="reducer/RESET",p={counter:0,minCounter:0,maxCounter:99,isSettingButtonNotReady:!0,isNumberValuesNotValid:!1,minInput:{inputValue:"0",lastRealValue:"0",isInputFocused:!1,isValueEqualToCurrentSetting:!0},maxInput:{inputValue:"99",lastRealValue:"99",isInputFocused:!1,isValueEqualToCurrentSetting:!0},isFirstVersion:!0,isSettingsOpened:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"reducer/INCREMENT":return Object(s.a)({},e,{counter:e.counter+1});case m:return Object(s.a)({},e,{counter:+e.minCounter});case"reducer/SWITCH_VERSION":return Object(s.a)({},e,{isFirstVersion:!e.isFirstVersion});case"reducer/OPEN_AND_CLOSE_SETTINGS":return e.isSettingsOpened?Object(s.a)({},e,{isSettingsOpened:!e.isSettingsOpened,minInput:Object(s.a)({},e.minInput,{inputValue:"".concat(e.minCounter),lastRealValue:"".concat(e.minCounter),isInputFocused:!1,isValueEqualToCurrentSetting:!0}),maxInput:Object(s.a)({},e.maxInput,{inputValue:"".concat(e.maxCounter),lastRealValue:"".concat(e.maxCounter),isInputFocused:!1,isValueEqualToCurrentSetting:!0})}):Object(s.a)({},e,{isSettingsOpened:!e.isSettingsOpened});case"reducer/SET_VALUES":return Object(s.a)({},e,{counter:""===e.minInput.inputValue?+e.minInput.lastRealValue:+e.minInput.inputValue,minCounter:""===e.minInput.inputValue?+e.minInput.lastRealValue:+e.minInput.inputValue,maxCounter:""===e.maxInput.inputValue?+e.maxInput.lastRealValue:+e.maxInput.inputValue,isSettingButtonNotReady:!0,minInput:Object(s.a)({},e.minInput,{isValueEqualToCurrentSetting:!0}),maxInput:Object(s.a)({},e.maxInput,{isValueEqualToCurrentSetting:!0}),isSettingsOpened:!!e.isFirstVersion&&e.isSettingsOpened});case"reducer/UPDATE_VALUES_FROM_MIN":var n=t.event.currentTarget.value;if(+n>999)return e;var a=Object(s.a)({},e,{minInput:Object(s.a)({},e.minInput,{inputValue:n})});return a=e.minCounter===+n&&e.maxCounter===+e.maxInput.lastRealValue||""===n&&+e.minInput.lastRealValue===e.minCounter?Object(s.a)({},a,{isSettingButtonNotReady:!0}):Object(s.a)({},a,{isSettingButtonNotReady:!1}),a=+e.maxInput.lastRealValue<=+n||+n<0?Object(s.a)({},a,{isNumberValuesNotValid:!0}):Object(s.a)({},a,{isNumberValuesNotValid:!1}),a=+n===e.minCounter||""===n&&+e.minInput.lastRealValue===e.minCounter?Object(s.a)({},a,{minInput:Object(s.a)({},a.minInput,{isValueEqualToCurrentSetting:!0})}):Object(s.a)({},a,{minInput:Object(s.a)({},a.minInput,{isValueEqualToCurrentSetting:!1})});case"reducer/UPDATE_VALUES_FROM_MAX":var u=t.event.currentTarget.value;if(+u>999)return e;var r=Object(s.a)({},e,{maxInput:Object(s.a)({},e.maxInput,{inputValue:u})});return r=e.maxCounter===+u&&e.minCounter===+e.minInput.lastRealValue||""===u&&+e.maxInput.lastRealValue===e.maxCounter?Object(s.a)({},r,{isSettingButtonNotReady:!0}):Object(s.a)({},r,{isSettingButtonNotReady:!1}),r=+u<=+e.minInput.lastRealValue||+u<0?Object(s.a)({},r,{isNumberValuesNotValid:!0}):Object(s.a)({},r,{isNumberValuesNotValid:!1}),r=+u===e.maxCounter||""===u&&+e.maxInput.lastRealValue===e.maxCounter?Object(s.a)({},r,{maxInput:Object(s.a)({},r.maxInput,{isValueEqualToCurrentSetting:!0})}):Object(s.a)({},r,{maxInput:Object(s.a)({},r.maxInput,{isValueEqualToCurrentSetting:!1})});case"reducer/ON_FOCUS_MIN":return Object(s.a)({},e,{minInput:Object(s.a)({},e.minInput,{inputValue:"",isInputFocused:!0})});case"reducer/ON_FOCUS_MAX":return Object(s.a)({},e,{maxInput:Object(s.a)({},e.maxInput,{inputValue:"",isInputFocused:!0})});case"reducer/ON_BLUR_MIN":var i=e.minInput.inputValue;return""===i?Object(s.a)({},e,{minInput:Object(s.a)({},e.minInput,{isInputFocused:!1})}):Object(s.a)({},e,{minInput:Object(s.a)({},e.minInput,{lastRealValue:i,isInputFocused:!1})});case"reducer/ON_BLUR_MAX":var l=e.maxInput.inputValue;return""===l?Object(s.a)({},e,{maxInput:Object(s.a)({},e.maxInput,{isInputFocused:!1})}):Object(s.a)({},e,{maxInput:Object(s.a)({},e.maxInput,{lastRealValue:l,isInputFocused:!1})});default:return e}},V=Object(l.b)((function(e){return{isFirstVersion:e.isFirstVersion,isSettingsOpened:e.isSettingsOpened,maxValue:e.maxCounter,minValue:e.minCounter,counterNumber:e.counter}}),(function(e){return{openAndCloseSettings:function(){e({type:"reducer/OPEN_AND_CLOSE_SETTINGS"})},increment:function(){e({type:"reducer/INCREMENT"})},reset:function(){e({type:m})}}}))((function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:!e.isFirstVersion&&e.isSettingsOpened?"counter displayNone":"counter"},u.a.createElement(c,{counterNumber:e.counterNumber,maxValue:e.maxValue,minValue:e.minValue,alertMonitor:e.counterNumber!==e.maxValue,isFirstVersion:e.isFirstVersion}),u.a.createElement("div",{className:"counterButtons"},u.a.createElement(o,{buttonProperty:"increment",onClickHandler:e.increment,disableMonitor:e.counterNumber===e.maxValue}),u.a.createElement(o,{buttonProperty:"reset",onClickHandler:e.reset,disableMonitor:e.counterNumber===e.minValue}),!e.isFirstVersion&&u.a.createElement(o,{buttonProperty:"Settings",onClickHandler:e.openAndCloseSettings}))))})),I=function(e){var t=e.data.isInputFocused,n=e.data.isValueEqualToCurrentSetting,a=e.inputName,r=e.data.lastRealValue,i=!t&&n?"Type ".concat(a," here"):n&&t&&e.data.inputValue===r?"This ".concat(a," is equal to current"):t?"".concat(a):"".concat(a," will be set: ");return u.a.createElement("div",{className:"inputContainer"},u.a.createElement("input",{className:"optionsInput",type:"number",id:"".concat(e.id),onFocus:e.focus,onBlur:e.blur,value:e.data.inputValue,onChange:e.change}),u.a.createElement("label",{className:"inputName",htmlFor:"".concat(e.id)},u.a.createElement("div",{className:"labelWrapper"},u.a.createElement("span",null,i),u.a.createElement("span",{className:e.data.isInputFocused||e.data.isValueEqualToCurrentSetting?"displayNone lastRealValue":"lastRealValue"},e.data.lastRealValue))))},N=Object(l.b)((function(e){return{isFirstVersion:e.isFirstVersion,isSettingsOpened:e.isSettingsOpened,isSettingButtonNotReady:e.isSettingButtonNotReady,isNumberValuesNotValid:e.isNumberValuesNotValid,minInput:e.minInput,maxInput:e.maxInput}}),(function(e){return{openAndCloseSettings:function(){e({type:"reducer/OPEN_AND_CLOSE_SETTINGS"})},setValues:function(){e({type:"reducer/SET_VALUES"})},updateValuesFromMin:function(t){var n={type:"reducer/UPDATE_VALUES_FROM_MIN",event:t};e(n)},updateValuesFromMax:function(t){var n={type:"reducer/UPDATE_VALUES_FROM_MAX",event:t};e(n)},onBlurMinHandler:function(){e({type:"reducer/ON_BLUR_MIN"})},onBlurMaxHandler:function(){e({type:"reducer/ON_BLUR_MAX"})},onFocusMinHandler:function(){e({type:"reducer/ON_FOCUS_MIN"})},onFocusMaxHandler:function(){e({type:"reducer/ON_FOCUS_MAX"})}}}))((function(e){var t=+e.maxInput.inputValue<0||e.minInput.inputValue<0?"! values can't be less than zero !":(e.maxInput.inputValue||e.maxInput.lastRealValue)===(e.minInput.inputValue||e.minInput.lastRealValue)?"! values can't be equal !":(+e.maxInput.inputValue<e.minInput.inputValue||+e.maxInput.lastRealValue<e.minInput.inputValue||+e.maxInput.inputValue<e.minInput.lastRealValue)&&"! minValue can't be greater than maxValue !";return u.a.createElement("div",{className:e.isFirstVersion||e.isSettingsOpened&&!e.isFirstVersion?"settings":"settings displayNone"},u.a.createElement("div",{className:"settingsInputs"},u.a.createElement(I,{blur:e.onBlurMinHandler,data:e.minInput,inputName:"min value",id:"minInput",change:function(t){e.updateValuesFromMin(t)},focus:e.onFocusMinHandler,isFirstVersion:e.isFirstVersion}),u.a.createElement(I,{blur:e.onBlurMaxHandler,data:e.maxInput,inputName:"max value",id:"maxInput",change:function(t){e.updateValuesFromMax(t)},focus:e.onFocusMaxHandler,isFirstVersion:e.isFirstVersion})),u.a.createElement("div",{className:"counterButtons"},u.a.createElement(o,{onClickHandler:e.setValues,buttonProperty:"set options",disableMonitor:e.isSettingButtonNotReady||e.isNumberValuesNotValid}),!e.isFirstVersion&&u.a.createElement(o,{onClickHandler:e.openAndCloseSettings,buttonProperty:"cancel"})),u.a.createElement("div",{className:e.isNumberValuesNotValid?"alertMessage":"alertMessage opacityZero"},t))})),b=Object(l.b)((function(e){return{isFirstVersion:e.isFirstVersion,isSettingsOpened:e.isSettingsOpened}}),(function(e){return{switchVersion:function(){e({type:"reducer/SWITCH_VERSION"})}}}))((function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:e.isFirstVersion?"verSwitcher":"verSwitcher secondVersion",onClick:e.switchVersion},u.a.createElement("span",{className:"currentVersionIsOne"},"1st version"),u.a.createElement("span",{className:"currentVersionIsTwo"},"2nd version"),u.a.createElement("div",{className:"switcher"})),u.a.createElement("div",{className:e.isFirstVersion?"App":"App secondVersionApp"},u.a.createElement("div",{className:"absoluteWrapper"},u.a.createElement("div",{className:"theCounter"},!e.isSettingsOpened||e.isFirstVersion?"The Counter":"Settings"),u.a.createElement("div",{className:e.isSettingsOpened?"wrapper settingsActive":"wrapper"},u.a.createElement(V,null),u.a.createElement(N,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(5),O=Object(E.b)(d);i.a.render(u.a.createElement(l.a,{store:O},u.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.d8b09d5c.chunk.js.map