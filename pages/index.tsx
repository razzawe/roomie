import React, { useState } from 'react';
import { Header } from './Components/Header';
import { ConnectionsList } from './Components/LeftSidebar';
import MainContent from './Components/MainContent';
import { UserMenu } from './Components/RightSidebar';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: string;
  profilePic: string;
  matchPercentage: number;
  hobbies: string[];
  description: string;
}

const dummyConnections: UserProfile[] = [
  {
    id: '1',
    name: 'David Chen',
    age: 18,
    gender: 'Male',
    profilePic: 'https://media.licdn.com/dms/image/v2/D5603AQEy2s4qo4qVuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726682064026?e=1738195200&v=beta&t=aLT_jr8AH9Ljnmshy4y6TwPHNeYM8hBMiWS0yc4fr3s',
    matchPercentage: 85,
    hobbies: ['Making Keyboards', 'Stargazing', 'OS fiddling'],
    description: "Hey! I'm David! I'm a first year Computer Science Student at UTSC."
  },
  {
    id: '2',
    name: 'Rami Al-Azzawe',
    age: 20,
    gender: 'Male',
    profilePic: 'https://media.licdn.com/dms/image/v2/D4E03AQHTfiHMAFffmg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721677026566?e=1738195200&v=beta&t=i_NdUvMUumBNE8msGtD5eHyvfDPfzGHXEb9QdfgV_Fk',
    matchPercentage: 92,
    hobbies: ['Guitar', 'Video Games', 'Coding'],
    description: "Professional Discord Mod, and coding extraordinaire. I'm a second year Comp Sci\
    student at UTSC and am currently taking all of my classes at UTSG"
  },
  {
    id: '3',
    name: 'Eshan Sankar',
    age: 19,
    gender: 'Male',
    matchPercentage: 22,
    profilePic: 'https://media.licdn.com/dms/image/v2/D5603AQGzslAZ4iQ3gg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706038636193?e=1738195200&v=beta&t=LAPI3o1ObJkOMeP9VdeDf6Td5R6poxWa0KcyjVM9m2A',
    hobbies: ['LinkedIn', 'Minecraft Speedrunning', 'Cooking'],
    description: "Yo, nice to meet you, I'm Eshan. I'm a Sophmore at UTSG studying EngSci. I'm also\
    intersted in Comp Sci, but I like Tinkering."
  },
];

const myProfile: UserProfile = {
  id: '999',
  name: "Bentley",
  age: 18,
  gender: 'Male',
  profilePic: "https://media.licdn.com/dms/image/v2/D4E03AQGgOnj_MjwvcQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732903042843?e=1738195200&v=beta&t=5OxYLw1Sq2RChFmNI-hpJU7fAom6_Nk3Qj2Au1P1inI",
  matchPercentage: 100,
  hobbies: ['Piano', 'Hockey', 'Music'],
  description: "Hey, I'm Bentley. I'm a first year Comp Sci student at UTSC."
}

const App: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<UserProfile>(dummyConnections[0]);
  const [connections, setConnections] = useState<UserProfile[]>([/* your initial connections */]);
  const [hiddenProfiles, setHiddenProfiles] = useState<Set<string>>(new Set());

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleInterested = (profile: UserProfile) => {
    setConnections(prevConnections => {
      const filteredConnections = prevConnections.filter(c => c.id !== profile.id);
      return [profile, ...filteredConnections];
    });
  };

  const handleNotInterested = (profile: UserProfile) => {
    setHiddenProfiles(prev => new Set(prev).add(profile.id));
  };
  const [prioritizedProfiles, setPrioritizedProfiles] = useState<Set<string>>(new Set());

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '250px 1fr 250px',
      gridTemplateRows: '80px 1fr',
      height: '100vh',
      overflow: 'hidden'
    },
    header: {
      gridColumn: '1 / span 3',
      gridRow: '1',
      borderBottom: '1px solid #eee'
    },
    leftSidebar: {
      gridColumn: '1',
      gridRow: '2',
      borderRight: '1px solid #eee',
      overflow: 'auto'
    },
    mainContent: {
      gridColumn: '2',
      gridRow: '2',
      overflow: 'auto'
    },
    rightSidebar: {
      gridColumn: '3',
      gridRow: '2',
      borderLeft: '1px solid #eee'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Header logoSrc="logo-placeholder.png" />
      </div>
      
      <div style={styles.leftSidebar}>
        <ConnectionsList 
          connections={dummyConnections} 
          onSelectConnection={setSelectedProfile}
          hiddenProfiles={hiddenProfiles}
          prioritizedProfiles={prioritizedProfiles}
          onInterested = {handleInterested}
        />
      </div>
      
      <div style={styles.mainContent}>
        <MainContent 
          userProfile={selectedProfile}
          onNotInterested={handleNotInterested}
          onInterested={handleInterested}    // Added this prop
        />
      </div>
      
      <div style={styles.rightSidebar}>
        <UserMenu 
          userProfilePic="https://media.licdn.com/dms/image/v2/D4E03AQGgOnj_MjwvcQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732903042843?e=1738195200&v=beta&t=5OxYLw1Sq2RChFmNI-hpJU7fAom6_Nk3Qj2Au1P1inI"
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default App;
