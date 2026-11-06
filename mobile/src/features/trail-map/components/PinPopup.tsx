import { Pressable, StyleSheet, Text, View } from 'react-native';

import { TRAIL_GREEN } from '../constants';
import type { PinCard } from '../types';

// The web's map popup, from frontend/src/lib/mapHelper.ts (buildPopupHTML,
// buildGroupedPopupHTML and buildSitePopupHTML) and its .trail-popup styles, at the web's
// sizes: a green header over a white body, with a tip pointing at the pin.

/** The card's width, as the web's. */
export const POPUP_WIDTH = 220;
/** The tip's height; it is twice as wide. MapLibre's popup tip is a 10 px triangle. */
export const POPUP_TIP = 10;
/** How far the tip stays from the card's rounded corner when it sits at a side. */
const TIP_INSET = 12;
/** The tab bar's height, fixed so a press can be told which tab it fell on (see tabAt). */
const TABS_HEIGHT = 28;
/** The tab bar's side padding and the space between its tabs, as the web's. */
const TABS_PADDING = 4;
const TABS_GAP = 2;

/** Where the popup sits against its pin: above or below it, and which way it leans. */
export type PopupPlacement = {
  vertical: 'above' | 'below';
  horizontal: 'center' | 'left' | 'right';
};

type PinPopupProps = {
  cards: PinCard[];
  /** Which card shows, on a pin with several. */
  tab: number;
  placement: PopupPlacement;
  onTabPress: (tab: number) => void;
};

/**
 * One pin's popup: its card, or for a pin with several entries, a tab for each and the
 * picked one's card. A tab opens its own entry, as the web's tabs do.
 */
export function PinPopup({ cards, tab, placement, onTabPress }: PinPopupProps) {
  const card = cards[tab] ?? cards[0];
  if (!card) return null;
  const grouped = cards.length > 1;
  const below = placement.vertical === 'below';
  // The tip touches the header when the card is below the pin, and the body when above.
  const tip = (
    <Tip
      pointing={below ? 'up' : 'down'}
      color={below ? TRAIL_GREEN : '#ffffff'}
      horizontal={placement.horizontal}
    />
  );

  return (
    <View style={{ width: POPUP_WIDTH }}>
      {below ? tip : null}
      <View style={styles.card}>
        <View style={styles.clip}>
          {grouped ? (
            <View style={styles.tabs}>
              {cards.map((entry, index) => {
                const active = index === tab;
                return (
                  <Pressable
                    key={entry.day}
                    accessibilityRole="tab"
                    accessibilityState={{ selected: active }}
                    onPress={() => onTabPress(index)}
                    style={[
                      styles.tab,
                      { borderBottomColor: active ? '#ffffff' : 'transparent' },
                    ]}
                  >
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.tabText,
                        { color: active ? '#ffffff' : 'rgba(255,255,255,0.6)' },
                      ]}
                    >
                      {entry.tab}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          ) : null}
          <View style={grouped ? styles.panelHeader : styles.header}>
            {card.eyebrow && !grouped ? (
              <Text style={styles.eyebrow}>{card.eyebrow}</Text>
            ) : null}
            <Text style={styles.title}>{card.title}</Text>
          </View>
          <View style={styles.body}>
            {card.line ? <Text style={styles.line}>{card.line}</Text> : null}
            {card.stats ? (
              <View style={styles.grid}>
                {card.stats.map((stat) => (
                  <View
                    key={stat.label}
                    style={stat.wide ? styles.wideCell : styles.cell}
                  >
                    <Text style={styles.statLabel}>{stat.label}</Text>
                    <Text style={styles.statValue}>{stat.value}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
        </View>
      </View>
      {below ? null : tip}
    </View>
  );
}

function Tip({
  pointing,
  color,
  horizontal,
}: {
  pointing: 'up' | 'down';
  color: string;
  horizontal: PopupPlacement['horizontal'];
}) {
  // A triangle from borders, as MapLibre draws its popup tip.
  return (
    <View
      style={{
        alignSelf:
          horizontal === 'left'
            ? 'flex-start'
            : horizontal === 'right'
              ? 'flex-end'
              : 'center',
        marginHorizontal: horizontal === 'center' ? 0 : TIP_INSET,
        width: 0,
        height: 0,
        borderLeftWidth: POPUP_TIP,
        borderRightWidth: POPUP_TIP,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        ...(pointing === 'down'
          ? { borderTopWidth: POPUP_TIP, borderTopColor: color }
          : { borderBottomWidth: POPUP_TIP, borderBottomColor: color }),
      }}
    />
  );
}

/**
 * Which tab a press at (x, y) fell on, for a popup whose top-left is at (left, top), or
 * null if it fell on none. Android doesn't pass presses on a map marker to the views in it,
 * so the map works the tab out from where it was pressed.
 */
export function tabAt(
  tabs: number,
  placement: PopupPlacement,
  [left, top]: [number, number],
  [x, y]: [number, number],
): number | null {
  if (tabs < 2) return null;
  const barTop = placement.vertical === 'below' ? top + POPUP_TIP : top;
  if (y < barTop || y > barTop + TABS_HEIGHT) return null;
  const across = x - left - TABS_PADDING;
  const width = (POPUP_WIDTH - 2 * TABS_PADDING - TABS_GAP * (tabs - 1)) / tabs;
  if (across < 0 || across > POPUP_WIDTH - 2 * TABS_PADDING) return null;
  return Math.min(tabs - 1, Math.floor(across / (width + TABS_GAP)));
}

/** Where the tip's point is from the card's left edge. */
export function tipX(horizontal: PopupPlacement['horizontal']): number {
  if (horizontal === 'left') return TIP_INSET + POPUP_TIP;
  if (horizontal === 'right') return POPUP_WIDTH - TIP_INSET - POPUP_TIP;
  return POPUP_WIDTH / 2;
}

// The web's inline styles, in points. The web sets the popup in system-ui.
const LABEL_GREY = '#9ca3af';

const styles = StyleSheet.create({
  // The web's .trail-popup content: 0.75rem corners and a soft shadow.
  card: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
  },
  clip: { borderRadius: 12, overflow: 'hidden' },
  tabs: {
    flexDirection: 'row',
    height: TABS_HEIGHT,
    backgroundColor: TRAIL_GREEN,
    paddingHorizontal: TABS_PADDING,
    gap: TABS_GAP,
  },
  tab: {
    flex: 1,
    paddingHorizontal: 4,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  header: {
    backgroundColor: TRAIL_GREEN,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  panelHeader: {
    backgroundColor: TRAIL_GREEN,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  eyebrow: {
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.54,
    color: 'rgba(255,255,255,0.75)',
    marginBottom: 3,
  },
  title: {
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '600',
    color: '#ffffff',
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
  },
  line: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '500',
    color: '#4b5563',
  },
  // Two columns, 8 apart down and 16 across.
  grid: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 8, columnGap: 16 },
  cell: { width: (POPUP_WIDTH - 24 - 16) / 2 },
  wideCell: {
    width: '100%',
    paddingTop: 7,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  statLabel: {
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: LABEL_GREY,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: '#111827',
  },
});
