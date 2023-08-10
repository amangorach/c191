AFRAME.registerComponent("plane-rotation", {
  init: function () {
    var plane = document.querySelector("#plane")
    var asp = plane.getAttribute("position")
    var rsp = plane.getAttribute("rotation")
    window.addEventListener("keydown", (e) => {
    
      // key "w"
      if (e.key === "w") {
        //rotation upwards
        if (rsp.z < 40) {
          rsp.z += 0.75
          plane.setAttribute("rotation", rsp)
        }
        if (asp.y < 3) {
          asp.y += 0.05
          plane.setAttribute("position", asp)
        }
      }
      // key "a"
      if (e.key === "a") {
        if (rsp.x > -10) {
          rsp.x -= 0.5
          plane.setAttribute("rotation", rsp)
        }
      }
      // key "s"
      if (e.key === "s") {
        //rotation
        if (rsp.z > -40) {
          rsp.z -= 0.75
          plane.setAttribute("rotation", rsp)
        }
        //position
        if (asp.y > -3) {
          asp.y -= 0.05
          plane.setAttribute("position", asp)
        }
      }
      //key "d"
      if (e.key === "d") {
        if (rsp.x < 10) {
          rsp.x += 0.5
          plane.setAttribute("rotation", rsp)
        }
      }
    })
  }
}),

AFRAME.registerComponent("terrain-rotation",{
  init: function () {
    var cam = document.querySelector("#camera")
    var terrain = document.querySelector("#terrain")
    positioning = terrain.getAttribute("position")
    rotationing = terrain.getAttribute("rotation")
    var camP = cam.getAttribute("position")
    var camR = cam.getAttribute("rotation")

    if(positioning.x > -1){
      positioning.x += 100;
      terrain.setAttribute("position", positioning)
    }
    window.addEventListener("keydown", (e)=>{
      //rotation left
      if(e.key === "a"){
        rotationing.y -= 0.45;
        rotationing.z = 0;
        terrain.setAttribute("rotation", rotationing)
      }

      //rotation right
      if(e.key === "d"){
        rotationing.y += 0.45;
        rotationing.z = 0;
        terrain.setAttribute("rotation", rotationing)
      }
    })
  }
})