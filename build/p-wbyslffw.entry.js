import{r as t,c as i,h as s,g as h}from"./p-c33d1ae1.js";import{b as n,a,c as e}from"./p-0fffbc16.js";const r=class{constructor(s){t(this,s),this.autoPlay=!0,this.onFinishAnimation=()=>this.onFinish.emit(this.getElement()),this.onCancelAnimation=()=>this.onCancel.emit(this.getElement()),this.onStart=i(this,"start",3),this.onFinish=i(this,"finish",3),this.onCancel=i(this,"cancel",3)}get currentAnimation(){return this._animation||(this._animation=this.createAnimation(),this._animation)}set currentAnimation(t){this._animation=t}animationDidChangeHandler(t){const i=e[t];if(!i)throw new Error(n);this.keyFrames=i}keyFramesDidChangeHandler(t){t&&(this.keyFrames=JSON.parse(t))}optionsDidChangeHandler(t){for(const i in t)t.hasOwnProperty(i)&&("id"===i?this.animateId=void 0:this[i]=void 0)}optionsDataDidChangeHandler(t){t&&(this.options=JSON.parse(t))}setCurrenTime(t){this.currentAnimation.currentTime=t}async getCurrentTime(){return this.currentAnimation.currentTime}setStartTime(t){this.currentAnimation.startTime=t}async getStartTime(){return this.currentAnimation.startTime}async getPending(){return this.currentAnimation.pending}setPlaybackRate(t){this.currentAnimation.playbackRate=t}async getPlaybackRate(){return this.currentAnimation.playbackRate}async getPlayState(){return this.currentAnimation.playState}async cancel(){this.currentAnimation.cancel()}async finish(){this.currentAnimation.finish()}async pause(){this.currentAnimation.pause()}async play(){"running"!==this.currentAnimation.playState&&(this.onStart.emit(this.getElement()),await this.currentAnimation.play())}async reverse(){this.currentAnimation.reverse()}async clear(){this._animation&&(this.currentAnimation.removeEventListener("finish",this.onFinishAnimation),this.currentAnimation.removeEventListener("cancel",this.onCancelAnimation),this.currentAnimation=null)}async destroy(){const t=this.currentAnimation;await this.clear(),t.finish()}getElement(){return this.el.firstElementChild||this.el.children.length&&this.el.children[0]||this.el}getAnimationOptions(){const t=this.options||this.optionsData&&JSON.parse(this.optionsData)||{};return void 0!==this.delay&&(t.delay=this.delay),void 0!==this.duration&&(t.duration=this.duration),this.direction&&(t.direction=this.direction),this.composite&&(t.composite=this.composite),this.easing&&(t.easing=a[this.easing]||this.easing),void 0!==this.endDelay&&(t.endDelay=this.endDelay),this.fill&&(t.fill=this.fill),void 0!==this.animateId&&(t.id=this.animateId),void 0!==this.iterations&&(t.iterations=this.iterations),void 0!==this.iterationStart&&(t.iterationStart=this.iterationStart),this.iterationComposite&&(t.iterationComposite=this.iterationComposite),t}createAnimation(){const t=this.getElement(),i=this.getAnimationOptions(),s=this.keyFrames||this.animation&&e[this.animation]||this.keyFramesData&&JSON.parse(this.keyFramesData)||[],h=t.animate(s,i);return void 0!==this.currentTime&&(h.currentTime=this.currentTime),void 0!==this.startTime&&(h.startTime=this.startTime),this.autoPlay?(this.onStart.emit(t),h.play()):h.pause(),h.addEventListener("finish",this.onFinishAnimation),h.addEventListener("cancel",this.onCancelAnimation),h}componentWillLoad(){this.autoPlay&&(this.currentAnimation=this.createAnimation())}async componentWillUpdate(){await this.clear()}componentDidUpdate(){this.autoPlay&&(this.currentAnimation=this.createAnimation())}componentDidUnload(){this.destroy()}render(){return s("slot",null)}get el(){return h(this)}static get watchers(){return{animation:["animationDidChangeHandler"],keyFramesData:["keyFramesDidChangeHandler"],options:["optionsDidChangeHandler"],optionsData:["optionsDataDidChangeHandler"],currentTime:["setCurrenTime"],startTime:["setStartTime"],playbackRate:["setPlaybackRate"]}}};export{r as animatable_component};