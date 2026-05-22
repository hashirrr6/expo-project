import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { ArrowLeft, ChevronRight, Search, MessageSquarePlus, Landmark, CreditCard, Shield, Globe } from 'lucide-react-native';
import { Colors, Shadows, BorderRadius } from '../constants/theme';
import { ThreadItem } from '../types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const STATIC_THREADS: ThreadItem[] = [
  {
    id: '1',
    senderName: 'Premium Credit Solutions',
    lastMessage: 'Payment confirmed! Your receipt will arrive in your email shortly.',
    timeAgo: '2hr ago',
    statusColor: 'green',
    unread: true,
  },
  {
    id: '2',
    senderName: 'Standard Payment Services',
    lastMessage: "We got your request. It's under review and you'll be notified once approved.",
    timeAgo: '2day ago',
    statusColor: 'orange',
    unread: false,
  },
  {
    id: '3',
    senderName: 'Basic Financial Support',
    lastMessage: 'Payment recorded successfully. A confirmation email and SMS are on the way.',
    timeAgo: '2day ago',
    statusColor: 'grey',
    unread: false,
  },
  {
    id: '4',
    senderName: 'Nova Finance Group',
    lastMessage: "Your payment went through! We've sent a detailed...",
    timeAgo: '5day ago',
    statusColor: 'green',
    unread: false,
  },
];



type ListItem =
  | { type: 'separator'; label: string; value?: string }
  | { type: 'thread'; thread: ThreadItem };

const getAvatarConfig = (id: string) => {
  switch (id) {
    case '1':
      return {
        bgColor: '#EFF6FF',
        iconColor: Colors.primary,
        Icon: Landmark,
      };
    case '2':
      return {
        bgColor: '#FFF7ED',
        iconColor: Colors.orange,
        Icon: CreditCard,
      };
    case '3':
      return {
        bgColor: '#F1F5F9',
        iconColor: Colors.textSubtle,
        Icon: Shield,
      };
    case '4':
      return {
        bgColor: '#ECFDF5',
        iconColor: Colors.success,
        Icon: Globe,
      };
    default:
      return {
        bgColor: Colors.borderLight,
        iconColor: Colors.textPlaceholder,
        Icon: Landmark,
      };
  }
};

export default function MessagesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const getBadgeColor = (status: ThreadItem['statusColor']): string => {
    switch (status) {
      case 'green':
        return Colors.success;
      case 'orange':
        return Colors.warning;
      default:
        return '#9CA3AF';
    }
  };

  const renderItem = ({ item }: { item: ListItem }) => {
    if (item.type === 'separator') {
      return (
        <View style={styles.dateSeparator}>
          <Text style={styles.dateText}>{item.label}</Text>
          {item.value ? <Text style={styles.dateValue}>{item.value}</Text> : null}
        </View>
      );
    }

    const { thread } = item;
    const avatar = getAvatarConfig(thread.id);
    const AvatarIcon = avatar.Icon;

    return (
      <TouchableOpacity style={styles.threadItem} activeOpacity={0.7}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatarTextHolder, { backgroundColor: avatar.bgColor }]}>
            <AvatarIcon size={20} color={avatar.iconColor} />
          </View>
          <View style={[styles.statusDot, { backgroundColor: getBadgeColor(thread.statusColor) }]} />
        </View>
        <View style={styles.threadDetails}>
          <View style={styles.threadTop}>
            <Text style={[styles.senderName, thread.unread && styles.unreadText]} numberOfLines={1}>
              {thread.senderName}
            </Text>
            <Text style={styles.timeAgo}>{thread.timeAgo}</Text>
          </View>
          <Text style={[styles.lastMessage, thread.unread && styles.unreadMessage]} numberOfLines={2}>
            {thread.lastMessage}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const filteredThreads = STATIC_THREADS.filter((t) =>
    t.senderName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group threads into date sections exactly matching the Figma design
  const listData: ListItem[] = [];
  if (filteredThreads.length > 0) {
    const groupToday = filteredThreads.filter((t) => t.id !== '4');
    const groupPast = filteredThreads.filter((t) => t.id === '4');

    if (groupToday.length > 0) {
      listData.push({ type: 'separator', label: 'Today', value: '12/10/24' });
      groupToday.forEach((t) => listData.push({ type: 'thread', thread: t }));
    }

    if (groupPast.length > 0) {
      listData.push({ type: 'separator', label: '12/10/24' });
      groupPast.forEach((t) => listData.push({ type: 'thread', thread: t }));
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color={Colors.textSecondary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Profile')}>
          <ChevronRight size={20} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* Search Field with magnifying glass on the right */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Your messages"
          placeholderTextColor={Colors.textPlaceholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Search size={18} color={Colors.textPlaceholder} style={styles.searchIcon} />
      </View>

      {/* Thread List */}
      <FlatList
        data={listData}
        keyExtractor={(item, index) =>
          item.type === 'separator' ? `sep-${item.label}-${index}` : `thread-${item.thread.id}`
        }
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Start New Chat CTA */}
      <View style={styles.footerCTA}>
        <TouchableOpacity style={styles.startChatButton} activeOpacity={0.8}>
          <MessageSquarePlus size={18} color={Colors.white} style={styles.ctaIcon} />
          <Text style={styles.startChatText}>Start a new chat</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 56,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    ...Shadows.sm,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.textPrimary,
    letterSpacing: -0.2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
    height: 46,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    paddingHorizontal: 12,
    ...Shadows.sm,
  },
  searchIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  dateSeparator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.textTertiary,
  },
  dateValue: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textPlaceholder,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 160,
  },
  threadItem: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatarTextHolder: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.borderLight,
  },
  avatarInitials: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.textMuted,
  },
  statusDot: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 11,
    height: 11,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: Colors.surface,
  },
  threadDetails: {
    flex: 1,
  },
  threadTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  senderName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textTertiary,
    flex: 1,
    marginRight: 8,
  },
  unreadText: {
    fontWeight: '900',
    color: Colors.textPrimary,
  },
  timeAgo: {
    fontSize: 11,
    color: Colors.textPlaceholder,
    fontWeight: '700',
  },
  lastMessage: {
    fontSize: 13,
    color: Colors.textSubtle,
    fontWeight: '600',
    lineHeight: 18,
  },
  unreadMessage: {
    color: Colors.textSecondary,
    fontWeight: '800',
  },
  footerCTA: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 90,
  },
  startChatButton: {
    height: 52,
    backgroundColor: Colors.primaryLight,
    borderRadius: BorderRadius.lg,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.blueStrong,
  },
  ctaIcon: {
    marginRight: 8,
  },
  startChatText: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: 14,
  },
});
