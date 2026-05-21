import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Bell, ArrowUpRight, DollarSign, RefreshCw, MessageSquare, Briefcase, Plus } from 'lucide-react-native';
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

const { width } = Dimensions.get('window');

interface HomeScreenProps {
  onNavigate: (screen: 'Onboarding' | 'Login' | 'Home' | 'Messages' | 'Profile') => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header Greeting Banner */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingTitle}>Hi, Sarah</Text>
            <Text style={styles.greetingSub}>Your credit in excellent shape!</Text>
          </View>
          <TouchableOpacity style={styles.bellButton} activeOpacity={0.7}>
            <Bell size={20} color="#1E293B" />
            <View style={styles.bellBadge} />
          </TouchableOpacity>
        </View>

        {/* Circular Gauge Credit Score Display */}
        <View style={styles.gaugeCard}>
          <Text style={styles.gaugeStateText}>Good</Text>
          <View style={styles.svgWrapper}>
            <Svg width="200" height="120" viewBox="0 0 200 120">
              {/* Background Arc */}
              <Path
                d="M 20 110 A 80 80 0 0 1 180 110"
                fill="none"
                stroke="#F1F5F9"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Colored Indicator Arc (Representing 704 / Good shape) */}
              <Path
                d="M 20 110 A 80 80 0 0 1 160 50"
                fill="none"
                stroke="url(#gaugeGrad)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <Defs>
                <LinearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#EF4444" />
                  <Stop offset="50%" stopColor="#EAB308" />
                  <Stop offset="100%" stopColor="#22C55E" />
                </LinearGradient>
              </Defs>
            </Svg>
            <View style={styles.scoreTextWrapper}>
              <Text style={styles.scoreNumberText}>704</Text>
              <Text style={styles.ptsAddedText}>+6pts</Text>
            </View>
          </View>

          <View style={styles.scoreRangeDetails}>
            <Text style={styles.rangeLimitText}>400</Text>
            <View style={styles.updateBadge}>
              <RefreshCw size={11} color="#64748B" style={styles.updateIcon} />
              <Text style={styles.updateDateText}>update on 02 Oct 2024</Text>
            </View>
            <Text style={styles.rangeLimitText}>850</Text>
          </View>
        </View>

        {/* 4 Quick Actions Grid */}
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionItem} activeOpacity={0.75}>
            <View style={[styles.actionIconHolder, { backgroundColor: '#EFF6FF' }]}>
              <DollarSign size={22} color="#3B82F6" />
            </View>
            <Text style={styles.actionName}>Pay Money</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem} activeOpacity={0.75}>
            <View style={[styles.actionIconHolder, { backgroundColor: '#ECFDF5' }]}>
              <ArrowUpRight size={22} color="#10B981" />
            </View>
            <Text style={styles.actionName}>Loan Request</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionItem}
            activeOpacity={0.75}
            onPress={() => onNavigate('Messages')}
          >
            <View style={[styles.actionIconHolder, { backgroundColor: '#FFF7ED' }]}>
              <MessageSquare size={22} color="#F97316" />
            </View>
            <Text style={styles.actionName}>Chat Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem} activeOpacity={0.75}>
            <View style={[styles.actionIconHolder, { backgroundColor: '#F5F3FF' }]}>
              <Briefcase size={22} color="#8B5CF6" />
            </View>
            <Text style={styles.actionName}>Finance Hub</Text>
          </TouchableOpacity>
        </View>

        {/* Credit History Line Chart Section */}
        <View style={styles.chartHistoryCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartHeaderTitle}>Credit Score History</Text>
          </View>

          {/* Svg chart graphic drawing score waves */}
          <View style={styles.chartContainer}>
            <Svg width={width - 80} height="150" viewBox="0 0 300 150">
              <Defs>
                <LinearGradient id="chartLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <Stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <Stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                </LinearGradient>
              </Defs>
              
              {/* Fill area beneath the curve */}
              <Path
                d="M 10 120 C 50 110, 80 75, 110 85 C 150 95, 180 35, 220 40 C 260 45, 280 65, 290 70 L 290 140 L 10 140 Z"
                fill="url(#chartLineGrad)"
              />

              {/* Grid Lines */}
              <Path d="M 10 30 L 290 30" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
              <Path d="M 10 70 L 290 70" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
              <Path d="M 10 110 L 290 110" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />

              {/* Stroke path of score */}
              <Path
                d="M 10 120 C 50 110, 80 75, 110 85 C 150 95, 180 35, 220 40 C 260 45, 280 65, 290 70"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Interactive Points Indicator Circles */}
              <Circle cx="110" cy="85" r="4" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5" />
              <Circle cx="220" cy="40" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
              <Circle cx="290" cy="70" r="4" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5" />
            </Svg>

            {/* Monthly Grid Labels */}
            <View style={styles.chartXLabels}>
              <Text style={styles.xLabel}>Jan</Text>
              <Text style={styles.xLabel}>Feb</Text>
              <Text style={styles.xLabel}>Mar</Text>
              <Text style={styles.xLabel}>Apr</Text>
              <Text style={styles.xLabel}>May</Text>
              <Text style={styles.xLabel}>Jun</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Circle Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Plus color="#FFFFFF" size={24} />
      </TouchableOpacity>

      {/* Bottom Floating Navigation Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => onNavigate('Home')}>
          <Text style={[styles.tabLabel, styles.tabLabelSelected]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => onNavigate('Messages')}>
          <Text style={styles.tabLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => onNavigate('Profile')}>
          <Text style={styles.tabLabel}>Profile</Text>
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
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 20,
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  greetingSub: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '600',
    marginTop: 2,
  },
  bellButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#101828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  bellBadge: {
    position: 'absolute',
    top: 13,
    right: 13,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  gaugeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },
  gaugeStateText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  svgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 200,
  },
  scoreTextWrapper: {
    position: 'absolute',
    alignItems: 'center',
    bottom: -10,
  },
  scoreNumberText: {
    fontSize: 48,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: -1.5,
  },
  ptsAddedText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '800',
  },
  scoreRangeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
  },
  rangeLimitText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
  },
  updateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#F1F5F9',
  },
  updateIcon: {
    marginRight: 4,
  },
  updateDateText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  actionItem: {
    alignItems: 'center',
    width: (width - 72) / 4,
  },
  actionIconHolder: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionName: {
    fontSize: 11,
    fontWeight: '800',
    color: '#334155',
    textAlign: 'center',
  },
  chartHistoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 24,
    padding: 24,
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 3,
  },
  chartHeader: {
    marginBottom: 16,
  },
  chartHeaderTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  chartContainer: {
    alignItems: 'center',
  },
  chartXLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  xLabel: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '750',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 90,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },
  tabLabelSelected: {
    color: '#2563EB',
    fontWeight: '900',
  },
});
