// @flow
/* eslint react/prop-types: 0 */

function resolveValue(value, def) {
  if (value !== undefined) return value;
  return def || 0;
}

/**
 * Performs a move transition between two elements
 * that are seemingly the same, with as little
 * visual artifacts as possible.
 *
 * This transition produces the best results when
 * the source and target components are visually identical
 * or very close in appearance. In case of images, this
 * transition tries to create a seamless scale from the
 * source image to the target image. This is not trivial
 * because the shape of the components affects how the image
 * is cropped and positioned within the component.
 */
export function sourceScaleTransition({ from, to, interpolate, render }) {
  const moveTarget = false;

  //
  // Select clone
  //
  const clone = moveTarget ? to : from;
  const otherClone = moveTarget ? from : to;

  //
  // Move & scale source component from start
  // position/size to the ending position
  //
  clone.style.transform = [
    { translateX: interpolate(clone.start.x, clone.end.x) },
    { translateY: interpolate(clone.start.y, clone.end.y) },
    { scaleX: interpolate(clone.start.scaleX, clone.end.scaleX) },
    { scaleY: interpolate(clone.start.scaleY, clone.end.scaleY) }
  ];

  //
  // Change border-radius of source so that it looks
  // like the the shape of the target component.
  // The border-radius is calculated using a volumetric
  // approach that takes the scaling of the view into
  // account in order to get as close as possible to the
  // same shape as the target component.
  //
  const interpolateBorderRadius = name => {
    const sR = resolveValue(from.style[name], from.style.borderRadius);
    const eR = resolveValue(to.style[name], to.style.borderRadius);
    const p4 = Math.PI / 4;
    if (moveTarget) {
      const sR2 = sR * sR;
      const sV = sR2 - p4 * sR2;
      const eV = sV / (to.start.scaleX * to.start.scaleY);
      const cR = Math.sqrt(eV / ((p4 - 1) * -1));
      return interpolate(cR, eR);
    } else {
      const eR2 = eR * eR;
      const eV = eR2 - p4 * eR2;
      const sV = eV / (from.end.scaleX * from.end.scaleY);
      const cR = Math.sqrt(sV / ((p4 - 1) * -1));
      return interpolate(sR, cR);
    }
  };
  const borderRadiusStyles = {
    borderRadius: interpolateBorderRadius("borderRadius"),
    borderTopLeftRadius: interpolateBorderRadius("borderTopLeftRadius"),
    borderTopRightRadius: interpolateBorderRadius("borderTopRightRadius"),
    borderBottomLeftRadius: interpolateBorderRadius("borderBottomLeftRadius"),
    borderBottomRightRadius: interpolateBorderRadius("borderBottomRightRadius")
  };
  clone.style = {
    ...clone.style,
    ...borderRadiusStyles
  };

  //
  // Render
  //
  return [render(clone)];
}

sourceScaleTransition.defaultProps = {
  useNativeDriver: true,
  nativeContentType: "snapshot"
};
