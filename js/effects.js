function doVerticalBounce(element, callback = () => {}) {
  const distance = 30;
  const speed = 50;
  const _marginTop = element.css("margin-top");
  element
    .animate({ marginTop: "-=" + distance }, speed)
    .delay(speed / 2)
    .animate({ marginTop: "+=" + 2 * distance }, speed)
    .delay(speed / 2)
    .animate({ marginTop: "-=" + 2 * distance }, speed)
    .delay(speed / 2)
    .animate({ marginTop: "+=" + 2 * distance }, speed)
    .delay(speed / 2)
    .animate({ marginTop: "-=" + 2 * distance }, speed)
    .delay(speed / 2)
    .animate({ marginTop: "+=" + distance }, speed, () => {
      element.css("margin-top", _marginTop);
      callback();
    });
}
function doHorizontalBounce(element, callback = () => {}) {
  const distance = 90;
  const speed = 50;
  const _marginLeft = element.css("margin-left");
  element
    .animate({ marginLeft: "-=" + distance }, speed)
    .delay(speed / 2)
    .animate({ marginLeft: "+=" + 2 * distance }, speed)
    .delay(speed / 2)
    .animate({ marginLeft: "-=" + 2 * distance }, speed)
    .delay(speed / 2)
    .animate({ marginLeft: "+=" + 2 * distance }, speed)
    .delay(speed / 2)
    .animate({ marginLeft: "-=" + 2 * distance }, speed)
    .delay(speed / 2)
    .animate({ marginLeft: "+=" + distance }, speed, () => {
      element.css("margin-left", _marginLeft);
      callback();
    });
}

function flashEffect(element) {
  const count = 6;

  const _color = element.css("color");
  const _transition = element.css("transition");
  element
    .css("transition", "all 0.1s")
    .css("color", "rgba(0,0,0,0)")
    .on(
      "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
      () => {
        element.unbind(
          "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"
        );
        element
          .css("color", _color)
          .on(
            "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
            () => {
              element.unbind(
                "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"
              );
              element
                .css("color", "rgba(0,0,0,0)")
                .on(
                  "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
                  () => {
                    element.unbind(
                      "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"
                    );
                    element
                      .css("color", _color)
                      .on(
                        "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
                        () => {
                          element.unbind(
                            "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"
                          );
                          element
                            .css("color", "rgba(0,0,0,0)")
                            .on(
                              "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
                              () => {
                                element.unbind(
                                  "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"
                                );
                                element.css("color", _color);
                                element.css("transition", _transition);
                              }
                            );
                        }
                      );
                  }
                );
            }
          );
      }
    );
}
