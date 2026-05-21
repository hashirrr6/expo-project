import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { ArrowLeft, ChevronRight, Search, MessageSquarePlus } from 'lucide-react-native';

interface ThreadItem {
  id: string;
  senderName: string;
  lastMessage: string;
  timeAgo: string;
  statusColor: 'green' | 'orange' | 'grey';
  unread: boolean;
}

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
    lastMessage: 'Your payment went through! We have sent a detailed...',
    timeAgo: '5day ago',
    statusColor: 'green',
    unread: false,
  },
];

interface MessagesScreenProps {
  onBack: () => void;
  onNavigate: (screen: 'Onboarding' | 'Login' | 'Home' | 'Messages' | 'Profile') => void;
}

export default function MessagesScreen({ onBack, onNavigate }: MessagesScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const getBadgeColor = (status: 'green' | 'orange' | 'grey') => {
    switch (status) {
      case 'green': return '#10B981';
      case 'orange': return '#F59E0B';
      default: return '#9CA3AF';
    }
  };

  const renderThread = ({ item }: { item: ThreadItem }) => (
    <TouchableOpacity style={styles.threadItem} activeOpacity={0.7}>
      <View style={styles.avatarContainer}>
        <View style={[styles.avatarTextHolder, { backgroundColor: '#F1F5F9' }]}>
          <Text style={styles.avatarInitials}>{item.senderName.charAt(0)}</Text>
        </View>
        <View style={[styles.statusDot, { backgroundColor: getBadgeColor(item.statusColor) }]} />
      </View>
      <View style={styles.threadDetails}>
        <View style={styles.threadTop}>
          <Text style={[styles.senderName, item.unread && styles.unreadText]}>{item.senderName}</Text>
          <Text style={styles.timeAgo}>{item.timeAgo}</Text>
        </View>
        <Text style={[styles.lastMessage, item.unread && styles.unreadMessage]} numberOfLines={2}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Panel */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={onBack}>
          <ArrowLeft size={20} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('Profile')}>
          <ChevronRight size={20} color="#1E293B" />
        </TouchableOpacity>
      </View>

      {/* Modern Search Thread Field */}
      <View style={styles.searchContainer}>
        <Search size={18} color="#94A3B8" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Your messages"
          placeholderTextColor="#94A3B8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Vertical List of Threads */}
      <FlatList
        data={STATIC_THREADS.filter(t => t.senderName.toLowerCase().includes(searchQuery.toLowerCase()))}
        keyExtractor={item => item.id}
        renderItem={renderThread}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Call to Action CTA to initiate chat */}
      <View style={styles.footerCTA}>
        <TouchableOpacity style={styles.startChatButton} activeOpacity={0.8}>
          <MessageSquarePlus size={18} color="#FFFFFF" style={styles.ctaIcon} />
          <Text style={styles.startChatText}>Start a new chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF2FC',
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
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#101828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: -0.2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
    height: 46,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    shadowColor: '#101828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '600',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 90,
  },
  threadItem: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
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
  },
  avatarInitials: {
    fontSize: 16,
    fontWeight: '800',
    color: '#475569',
  },
  statusDot: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 11,
    height: 11,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
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
    color: '#334155',
  },
  unreadText: {
    fontWeight: '900',
    color: '#0F172A',
  },
  timeAgo: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '700',
  },
  lastMessage: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
    lineHeight: 18,
  },
  unreadMessage: {
    color: '#1E293B',
    fontWeight: '800',
  },
  footerCTA: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
  },
  startChatButton: {
    height: 52,
    backgroundColor: '#3B82F6',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  ctaIcon: {
    marginRight: 8,
  },
  startChatText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
  },
});
