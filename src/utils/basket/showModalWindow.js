function showModalWindow(marker){
    marker = true
    console.log('marker is true')
    setTimeout(() => {
        marker = false;
        console.log("marker is false")
      }, "5000");
      return marker
}

function closeModalWindow(marker){
    marker = false
    console.log("close", marker)
    return marker
}
export {showModalWindow, closeModalWindow}