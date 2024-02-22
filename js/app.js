let hasTouchScreen = false
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0
} else {
  let mQ = window.matchMedia && matchMedia("(pointer:coarse)")
  if (mQ && mQ.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches
  } else if ("orientation" in window) {
    hasTouchScreen = true // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    let UA = navigator.userAgent
    hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
  }
}

let isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function (p) {
    return p.toString() === "[object SafariRemoteNotification]"
  })(
    !window["safari"] ||
      (typeof safari !== "undefined" && window["safari"].pushNotification)
  )
let pageWidth = window.innerWidth

// -----
// event listeners

if (!hasTouchScreen) {
  window.addEventListener("resize", function () {
    window.location.reload()
  })
}

let nav = document.getElementById("nav")
if (hasTouchScreen) {
  nav.style.display = "none"
}

let logo = document.querySelector(".name-logo")
if (isSafari) {
  logo.style.transform = "translate(-50%, -50%)"

  if (pageWidth <= 330) {
    logo.style.fontSize = "16px"
  } else if (pageWidth <= 420) {
    logo.style.fontSize = "38px"
  } else if (pageWidth <= 480) {
    logo.style.fontSize = "46px"
  } else if (pageWidth <= 550) {
    logo.style.fontSize = "56px"
  } else if (pageWidth <= 650) {
    logo.style.fontSize = "66px"
  } else if (pageWidth <= 760) {
    logo.style.fontSize = "76px"
  } else if (pageWidth <= 900) {
    logo.style.fontSize = "90px"
  } else if (pageWidth <= 1080) {
    logo.style.fontSize = "112px"
  } else {
    logo.style.fontSize = "136px"
  }
}
if (hasTouchScreen || window.innerWidth < 760 || isSafari) {
  logo.style.position = "absolute"
}
