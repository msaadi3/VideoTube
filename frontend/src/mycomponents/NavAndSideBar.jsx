import React, { useState } from 'react';
import {
  Search,
  Menu,
  X,
  Home,
  ThumbsUp,
  Clock,
  PlaySquare,
  Users,
  HelpCircle,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import VideoCard from './VideoCard.jsx';

const sampleVideos = [
  {
    id: 1,
    thumbnail:
      'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    views: '10.3k',
    uploadTime: '44 minutes ago',
    channelName: 'Code Master',
    channelAvatar:
      'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1,
    thumbnail:
      'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    views: '10.3k',
    uploadTime: '44 minutes ago',
    channelName: 'Code Master',
    channelAvatar:
      'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1,
    thumbnail:
      'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    views: '10.3k',
    uploadTime: '44 minutes ago',
    channelName: 'Code Master',
    channelAvatar:
      'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1,
    thumbnail:
      'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    views: '10.3k',
    uploadTime: '44 minutes ago',
    channelName: 'Code Master',
    channelAvatar:
      'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1,
    thumbnail:
      'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    views: '10.3k',
    uploadTime: '44 minutes ago',
    channelName: 'Code Master',
    channelAvatar:
      'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  // Add more sample videos here...
];
export default function NavAndSideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  const handleLogin = () => {
    console.log('Login clicked');
    // Implement login functionality here
  };

  const handleSignup = () => {
    console.log('Signup clicked');
    // Implement signup functionality here
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='h-screen overflow-y-auto bg-[#121212] text-white'>
      <header className='sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4'>
        <nav className='mx-auto flex max-w-7xl items-center py-2'>
          <Button
            variant='ghost'
            size='icon'
            className='mr-2 lg:hidden hover:bg-[#2a2a2a]'
            onClick={toggleSidebar}
          >
            <Menu className='h-6 w-6' />
          </Button>
          <div className='mr-4 w-12 shrink-0 sm:w-16'>
            <svg
              viewBox='0 0 63 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z'
                stroke='#E9FCFF'
                strokeWidth='1.38962'
                strokeMiterlimit='10'
              />
              <path
                d='M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z'
                stroke='url(#paint0_linear_53_10115)'
                strokeWidth='6.99574'
                strokeMiterlimit='10'
                strokeLinecap='round'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_53_10115'
                  x1='2.23416'
                  y1='20.3361'
                  x2='26.863'
                  y2='44.9649'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#007EF8' />
                  <stop offset='1' stopColor='#FF4A9A' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <form
            onSubmit={handleSearch}
            className='relative mx-auto hidden w-full max-w-md overflow-hidden sm:block'
          >
            <Input
              type='search'
              placeholder='Search'
              className='w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className='absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2' />
          </form>
          <Button
            variant='ghost'
            size='icon'
            className='ml-auto sm:hidden'
            onClick={handleSearch}
          >
            <Search className='h-6 w-6' />
          </Button>
          <div className='ml-4 flex items-center gap-2'>
            <Button
              variant='outline'
              className='hidden border-white text-white hover:bg-[#2a2a2a] sm:inline-flex'
              onClick={handleLogin}
            >
              Log in
            </Button>
            <Button
              className='hidden bg-[#ae7aff] text-black hover:bg-[#9d63ff] sm:inline-flex'
              onClick={handleSignup}
            >
              Sign up
            </Button>
          </div>
        </nav>
      </header>
      <div className='flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]'>
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-[#121212] transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:relative lg:translate-x-0`}
        >
          <div className='flex h-full flex-col'>
            <div className='flex items-center justify-between p-4 lg:hidden'>
              <div className='w-12'>
                <svg
                  viewBox='0 0 63 64'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z'
                    stroke='#E9FCFF'
                    strokeWidth='1.38962'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z'
                    stroke='url(#paint0_linear_53_10115)'
                    strokeWidth='6.99574'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_53_10115'
                      x1='2.23416'
                      y1='20.3361'
                      x2='26.863'
                      y2='44.9649'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#007EF8' />
                      <stop offset='1' stopColor='#FF4A9A' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <Button
                variant='ghost'
                size='icon'
                onClick={toggleSidebar}
                className='hover:bg-[#2a2a2a]'
              >
                <X className='h-6 w-6' />
              </Button>
            </div>
            <ul className='flex flex-col gap-2 p-4'>
              <SidebarItem icon={<Home className='h-5 w-5' />} label='Home' />
              <SidebarItem
                icon={<ThumbsUp className='h-5 w-5' />}
                label='Liked Videos'
              />
              <SidebarItem
                icon={<Clock className='h-5 w-5' />}
                label='History'
              />
              <SidebarItem
                icon={<PlaySquare className='h-5 w-5' />}
                label='My Content'
              />
              <SidebarItem
                icon={<Users className='h-5 w-5' />}
                label='Subscribers'
              />
            </ul>
            <div className='mt-auto p-4'>
              <SidebarItem
                icon={<HelpCircle className='h-5 w-5' />}
                label='Support'
              />
              <SidebarItem
                icon={<Settings className='h-5 w-5' />}
                label='Settings'
              />
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <section className='w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0'>
          {sampleVideos.length > 0 ? (
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4'>
              {sampleVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  thumbnail={video.thumbnail}
                  duration={video.duration}
                  title={video.title}
                  views={video.views}
                  uploadTime={video.uploadTime}
                  channelName={video.channelName}
                  channelAvatar={video.channelAvatar}
                />
              ))}
            </div>
          ) : (
            <div className='flex h-full items-center justify-center'>
              <div className='w-full max-w-sm text-center'>
                <p className='mb-3 w-full'>
                  <span className='inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]'>
                    <PlaySquare className='h-6 w-6' />
                  </span>
                </p>
                <h5 className='mb-2 font-semibold'>No videos available</h5>
                <p>
                  There are no videos here available. Please try to search for
                  something else.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <li>
      <Button
        variant='ghost'
        className='w-full justify-start px-2 py-2 text-left hover:bg-white/10'
      >
        <span className='mr-3 inline-block'>{icon}</span>
        <span>{label}</span>
      </Button>
    </li>
  );
}
