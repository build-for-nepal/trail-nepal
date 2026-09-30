import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui';
import { Backpack, Bookmark, Compass, User } from 'lucide-react-native';

import { TabBarItem } from '@/components/layout/TabBarItem';
import { TabBarSurface } from '@/components/layout/TabBarSurface';

// TabList and its TabTriggers must stay direct children of Tabs. Expo Router only walks
// Fragments and TabList when collecting triggers, so wrapping either in a component of
// our own makes the screens invisible to the navigator.
export default function TabsLayout() {
  return (
    <Tabs>
      <TabSlot />

      <TabList asChild>
        <TabBarSurface>
          <TabTrigger name="explore" href="/" asChild>
            <TabBarItem label="Explore" icon={Compass} />
          </TabTrigger>

          <TabTrigger name="shortlist" href="/shortlist" asChild>
            <TabBarItem label="Shortlist" icon={Bookmark} />
          </TabTrigger>

          <TabTrigger name="trip" href="/trip" asChild>
            <TabBarItem label="My trip" icon={Backpack} />
          </TabTrigger>

          <TabTrigger name="profile" href="/profile" asChild>
            <TabBarItem label="Profile" icon={User} />
          </TabTrigger>
        </TabBarSurface>
      </TabList>
    </Tabs>
  );
}
