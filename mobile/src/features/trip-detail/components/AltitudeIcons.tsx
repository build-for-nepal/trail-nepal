import Svg, { Path } from 'react-native-svg';

// From frontend/src/assets/altitudesickness/contact/call.svg and helicopter.svg, as drawn:
// the icons on the emergency call buttons, in white.

type IconProps = { size: number; color: string };

export function CallIcon({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 18 18" width={size} height={size} fill="none">
      <Path
        d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
        fill={color}
      />
    </Svg>
  );
}

export function HelicopterIcon({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 22 20" width={size} height={(size * 20) / 22} fill="none">
      <Path
        d="M8 11V5C6.33333 5 4.91667 5.58333 3.75 6.75C2.58333 7.91667 2 9.33333 2 11H8ZM12 15V5H10V13H2V15H12ZM14 11.8L20 11.2V10H14V11.8ZM12 20H2V18H12V20ZM14 17H2C1.45 17 0.979167 16.8042 0.5875 16.4125C0.195833 16.0208 0 15.55 0 15V11C0 8.76667 0.775 6.875 2.325 5.325C3.875 3.775 5.76667 3 8 3H14V8H19L20 6H22V13L14 13.8V17ZM18 2H2V0H18V2ZM14 11.8V10V11.8Z"
        fill={color}
      />
    </Svg>
  );
}
