/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import viteLogo from '/vite.svg'

import { LayoutDashboardIcon, SunIcon } from 'lucide-react';

const navlinks = [
    {
        name: 'dashboard',
        imgUrl: <LayoutDashboardIcon />,
        link: '/',
    },
    {
        name: 'campaign',
        imgUrl: <LayoutDashboardIcon />,
        link: '/create-campaign',
    },
    {
        name: 'payment',
        imgUrl: <LayoutDashboardIcon />,
        link: '/',
        disabled: true,
    },
    {
        name: 'withdraw',
        imgUrl: <LayoutDashboardIcon />,
        link: '/',
        disabled: true,
    },
    {
        name: 'profile',
        imgUrl: <LayoutDashboardIcon />,
        link: '/profile',
    },
    {
        name: 'logout',
        imgUrl: <LayoutDashboardIcon />,
        link: '/',
        disabled: true,
    },
];


const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');

    return (
        <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
            <Link to="/">
                <a href="https://vitejs.dev" target="_blank" className="h-10 w-10">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </Link>

            <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    {navlinks.map((link) => (
                        <Icon
                            key={link.name}
                            {...link}
                            isActive={isActive}
                            handleClick={() => {
                                if (!link.disabled) {
                                    setIsActive(link.name);
                                    navigate(link.link);
                                }
                            }}
                        />
                    ))}
                </div>

                <SunIcon className="bg-[#1c1c24] shadow-secondary" />
            </div>
        </div>
    )
}

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }: any) => (
    <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
        {!isActive ? (
            <div className="w-1/2 h-1/2 bg-green-500" >
                {imgUrl}
            </div>
        ) : (
            <div className={`w-1/2 h-1/2 bg-green-500 ${isActive !== name && 'grayscale'}`} >
                {imgUrl}
            </div>
        )}
    </div>
)

export default Sidebar