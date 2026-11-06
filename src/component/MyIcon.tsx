import React from 'react';
import Icon from '@ant-design/icons';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const AddSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 16.5H13.5C14.3279 16.5 15 15.8279 15 15V5.25L11.25 1.5H4.5C3.67213 1.5 3 2.17213 3 3V6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M10.5 1.5V4.5C10.5 5.32787 11.1721 6 12 6H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M2.25 11.25H6.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M4.5 9V13.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>

);

const BellSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.70117 15.75C7.96913 16.2141 8.4643 16.4999 9.00017 16.4999C9.53604 16.4999 10.0312 16.2141 10.2992 15.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M2.44694 11.4945C2.24676 11.7139 2.19491 12.0308 2.31472 12.3025C2.43454 12.5743 2.70344 12.7498 3.00044 12.75H15.0004C15.2974 12.7501 15.5665 12.575 15.6866 12.3034C15.8067 12.0318 15.7553 11.7149 15.5554 11.4952C14.5579 10.467 13.5004 9.37425 13.5004 6C13.5004 3.51638 11.4841 1.5 9.00044 1.5C6.51683 1.5 4.50044 3.51638 4.50044 6C4.50044 9.37425 3.44219 10.467 2.44694 11.4945" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>

);
const CalendarSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1.5V4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M12 1.5V4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M3.75 3H14.25C15.0779 3 15.75 3.67213 15.75 4.5V15C15.75 15.8279 15.0779 16.5 14.25 16.5H3.75C2.92213 16.5 2.25 15.8279 2.25 15V4.5C2.25 3.67213 2.92213 3 3.75 3V3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M2.25 7.5H15.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M6 10.5H6.0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M9 10.5H9.0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M12 10.5H12.0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M6 13.5H6.0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M9 13.5H9.0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M12 13.5H12.0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>
);

const HomeSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 15.75V9.75C11.25 9.33606 10.9139 9 10.5 9H7.5C7.08606 9 6.75 9.33606 6.75 9.75V15.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M2.25 7.49998C2.24989 7.05832 2.44443 6.63906 2.78175 6.35398L8.03175 1.85473C8.59079 1.38225 9.40921 1.38225 9.96825 1.85473L15.2183 6.35398C15.5556 6.63906 15.7501 7.05832 15.75 7.49998V14.25C15.75 15.0778 15.0779 15.75 14.25 15.75H3.75C2.92213 15.75 2.25 15.0778 2.25 14.25V7.49998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>
);
const PeopleSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.75V14.25C12 12.5943 10.6557 11.25 9 11.25H4.5C2.84425 11.25 1.5 12.5943 1.5 14.25V15.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M3.75 5.25C3.75 6.90575 5.09425 8.25 6.75 8.25C8.40575 8.25 9.75 6.90575 9.75 5.25C9.75 3.59425 8.40575 2.25 6.75 2.25C5.09425 2.25 3.75 3.59425 3.75 5.25V5.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M16.5 15.75V14.25C16.499 12.8829 15.5737 11.6893 14.25 11.3475" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M12 2.34753C13.3274 2.68741 14.2559 3.88353 14.2559 5.25378C14.2559 6.62404 13.3274 7.82016 12 8.16003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>

);
const PlusSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33301 8H12.6663" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M8 3.33337V12.6667" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>

);
const TaskSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.75 1.5H11.25C11.6639 1.5 12 1.83606 12 2.25V3.75C12 4.16394 11.6639 4.5 11.25 4.5H6.75C6.33606 4.5 6 4.16394 6 3.75V2.25C6 1.83606 6.33606 1.5 6.75 1.5V1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M12 3H13.5C14.3279 3 15 3.67213 15 4.5V15C15 15.8279 14.3279 16.5 13.5 16.5H4.5C3.67213 16.5 3 15.8279 3 15V4.5C3 3.67213 3.67213 3 4.5 3H6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M9 8.25H12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M9 12H12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M6 8.25H6.0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M6 12H6.0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>

);
const ToolSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.025 4.72505C10.7392 5.01668 10.7392 5.48342 11.025 5.77505L12.225 6.97505C12.5166 7.26091 12.9834 7.26091 13.275 6.97505L16.1025 4.14755C16.8747 5.854 16.5092 7.86032 15.1847 9.18476C13.8603 10.5092 11.854 10.8748 10.1475 10.1026L4.96501 15.2851C4.34411 15.906 3.33592 15.906 2.71501 15.2851C2.09411 14.6641 2.09411 13.656 2.71501 13.0351L7.89751 7.85255C7.12531 6.1461 7.49087 4.13978 8.8153 2.81534C10.1397 1.49091 12.1461 1.12535 13.8525 1.89755L11.0325 4.71755L11.025 4.72505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>

);
const WarnSvg: React.FC = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 17.5192 6.48085 22 12 22C17.5192 22 22 17.5192 22 12C22 6.48085 17.5192 2 12 2C6.48085 2 2 6.48085 2 12V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M12 8V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
        <path d="M12 16H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#53614D" />
    </svg>

);
const SettingsSvg: React.FC = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.14667 1.33334H7.85333C7.49971 1.33334 7.16057 1.47381 6.91053 1.72386C6.66048 1.97391 6.52 2.31305 6.52 2.66667V2.78667C6.51976 3.02049 6.45804 3.25013 6.34103 3.45256C6.22401 3.65499 6.05583 3.82309 5.85333 3.94L5.56667 4.10667C5.36398 4.22369 5.13405 4.2853 4.9 4.2853C4.66595 4.2853 4.43603 4.22369 4.23333 4.10667L4.13333 4.05334C3.82738 3.87684 3.46389 3.82897 3.12267 3.92021C2.78145 4.01145 2.49037 4.23436 2.31333 4.54L2.16667 4.79334C1.99018 5.09929 1.9423 5.46278 2.03354 5.804C2.12478 6.14523 2.34769 6.4363 2.65333 6.61334L2.75333 6.68C2.95485 6.79634 3.12241 6.9634 3.23937 7.16456C3.35632 7.36572 3.4186 7.59398 3.42 7.82667V8.16667C3.42093 8.40162 3.35977 8.63264 3.2427 8.83634C3.12563 9.04005 2.95681 9.2092 2.75333 9.32667L2.65333 9.38667C2.34769 9.5637 2.12478 9.85478 2.03354 10.196C1.9423 10.5372 1.99018 10.9007 2.16667 11.2067L2.31333 11.46C2.49037 11.7656 2.78145 11.9886 3.12267 12.0798C3.46389 12.171 3.82738 12.1232 4.13333 11.9467L4.23333 11.8933C4.43603 11.7763 4.66595 11.7147 4.9 11.7147C5.13405 11.7147 5.36398 11.7763 5.56667 11.8933L5.85333 12.06C6.05583 12.1769 6.22401 12.345 6.34103 12.5474C6.45804 12.7499 6.51976 12.9795 6.52 13.2133V13.3333C6.52 13.687 6.66048 14.0261 6.91053 14.2761C7.16057 14.5262 7.49971 14.6667 7.85333 14.6667H8.14667C8.50029 14.6667 8.83943 14.5262 9.08948 14.2761C9.33953 14.0261 9.48 13.687 9.48 13.3333V13.2133C9.48024 12.9795 9.54196 12.7499 9.65898 12.5474C9.77599 12.345 9.94418 12.1769 10.1467 12.06L10.4333 11.8933C10.636 11.7763 10.866 11.7147 11.1 11.7147C11.3341 11.7147 11.564 11.7763 11.7667 11.8933L11.8667 11.9467C12.1726 12.1232 12.5361 12.171 12.8773 12.0798C13.2186 11.9886 13.5096 11.7656 13.6867 11.46L13.8333 11.2C14.0098 10.894 14.0577 10.5306 13.9665 10.1893C13.8752 9.84811 13.6523 9.55704 13.3467 9.38L13.2467 9.32667C13.0432 9.2092 12.8744 9.04005 12.7573 8.83634C12.6402 8.63264 12.5791 8.40162 12.58 8.16667V7.83334C12.5791 7.59839 12.6402 7.36737 12.7573 7.16366C12.8744 6.95996 13.0432 6.79081 13.2467 6.67334L13.3467 6.61334C13.6523 6.4363 13.8752 6.14523 13.9665 5.804C14.0577 5.46278 14.0098 5.09929 13.8333 4.79334L13.6867 4.54C13.5096 4.23436 13.2186 4.01145 12.8773 3.92021C12.5361 3.82897 12.1726 3.87684 11.8667 4.05334L11.7667 4.10667C11.564 4.22369 11.3341 4.2853 11.1 4.2853C10.866 4.2853 10.636 4.22369 10.4333 4.10667L10.1467 3.94C9.94418 3.82309 9.77599 3.65499 9.65898 3.45256C9.54196 3.25013 9.48024 3.02049 9.48 2.78667V2.66667C9.48 2.31305 9.33953 1.97391 9.08948 1.72386C8.83943 1.47381 8.50029 1.33334 8.14667 1.33334Z" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="#4E5C48" />
        <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="#4E5C48" />
    </svg>


);
const SignOutSvg: React.FC = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="#B7524D" />
        <path d="M10.667 11.3333L14.0003 8.00001L10.667 4.66667" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="#B7524D" />
        <path d="M14 8H6" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="#B7524D" />
    </svg>


);
export const AddIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={AddSvg} {...props} />
);

export const BellIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={BellSvg} {...props} />
);

export const CalendarIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={CalendarSvg} {...props} />
);
export const HomeIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={HomeSvg} {...props} />
);
export const PeopleIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={PeopleSvg} {...props} />
);

export const PlusIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={PlusSvg} {...props} />
);

export const TaskIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={TaskSvg} {...props} />
);
export const ToolIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={ToolSvg} {...props} />
);

export const WarnIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={WarnSvg} {...props} />
);
export const SettingsIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={SettingsSvg} {...props} />
);
export const SignOutIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
    <Icon component={SignOutSvg} {...props} />
);

