<template>
  <div class="hello">
    <a-scene gltf-model="dracoDecoderPath: "  vr-mode-ui="enabled: false">
      <a-entity
        scale="50 50 50"
        gltf-model="url(shoe.glb)"
        @model-loaded="modelLoaded"
      ></a-entity>
      <a-entity
        camera
        look-controls
        orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 5 15"
      ></a-entity>

      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
    <div class="ui">
      <label class="color-change-btn sole" :style="{ background: sole.color }">
        <div class="txt-wrap">
          <p class="txt">Sole</p>
        </div>
        <input type="color" @input="soleColor($event)" :value="sole.color" />
      </label>
      <label class="color-change-btn sole" :style="{ background: body.color }">
        <div class="txt-wrap">
          <p class="txt">Body</p>
        </div>
        <input type="color" @input="bodyColor($event)" :value="body.color" />
      </label>
      <label class="color-change-btn sole" :style="{ background: tongue.color }">
        <div class="txt-wrap">
          <p class="txt">Tongue</p>
        </div>
        <input type="color" @input="toungeColor($event)" :value="tongue.color" />
      </label>
      <label class="color-change-btn sole" :style="{ background: laces.color }">
        <div class="txt-wrap">
          <p class="txt">Laces</p>
        </div>
        <input type="color" @input="lacesColor($event)" :value="laces.color" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      sole: { model: null, color: "#FFFFFF" },
      body: { model: null, color: "#000000" },
      tongue: { model: null, color: "#000000" },
      laces: { model: null, color: "#FFFFFF" },
    };
  },
  methods: {
    modelLoaded: function (e) {
      let shoe = e.target.object3D.children[0];
      this.sole.model = shoe.children[1];
      this.body.model = shoe.children[3];
      this.tongue.model = shoe.children[4];
      this.laces.model = shoe.children[7];
      console.log(e.target.object3D.children[0].children);
    },
    soleColor: function (e) {
      let color = e.target.value;
      this.sole.color = color;
      this.sole.model.material.color = new THREE.Color(color);
    },
    bodyColor: function (e) {
      let color = e.target.value;
      this.body.color = color;
      this.body.model.material.color = new THREE.Color(color);
    },
    toungeColor: function (e) {
      let color = e.target.value;
      this.tongue.color = color;
      this.tongue.model.material.color = new THREE.Color(color);
    },
    lacesColor: function (e) {
      let color = e.target.value;
      this.laces.color = color;
      this.laces.model.material.color = new THREE.Color(color);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ui {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100vw;
  overflow-x: auto;
}
.color-change-btn {
  position: relative;
  cursor: pointer;
  width: 100px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid black;

  input {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
  }
  .txt-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 80%;
    border-radius: 10px;
    background: white;
    .txt {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
