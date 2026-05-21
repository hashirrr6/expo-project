import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Bell, ArrowUpRight, DollarSign, Calendar, MessageSquare, Briefcase, Plus, Clock, Compass } from 'lucide-react-native';
import Svg, { Path, Circle, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import { Colors, Shadows, BorderRadius } from '../constants/theme';
import { ScreenName } from '../types';
import BottomTabBar from '../components/BottomTabBar';

const { width } = Dimensions.get('window');

interface HomeScreenProps {
  onNavigate: (screen: ScreenName) => void;
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
            <Bell size={20} color={Colors.textSecondary} />
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
                stroke={Colors.borderLight}
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Colored Indicator Arc */}
              <Path
                d="M 20 110 A 80 80 0 0 1 160 50"
                fill="none"
                stroke="url(#gaugeGrad)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <Defs>
                <LinearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor={Colors.error} />
                  <Stop offset="50%" stopColor="#EAB308" />
                  <Stop offset="100%" stopColor={Colors.success} />
                </LinearGradient>
              </Defs>
            </Svg>
            <View style={styles.scoreTextWrapper}>
              <Text style={styles.scoreNumberText}>704</Text>
              <Text style={styles.ptsAddedText}>+8pts</Text>
            </View>
          </View>

          <View style={styles.scoreRangeDetails}>
            <Text style={styles.rangeLimitText}>400</Text>
            <View style={styles.updateBadge}>
              <Calendar size={11} color={Colors.textSubtle} style={styles.updateIcon} />
              <Text style={styles.updateDateText}>update on 02 Oct 2024</Text>
            </View>
            <Text style={styles.rangeLimitText}>850</Text>
          </View>
        </View>

        {/* 4 Quick Actions Grid */}
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionItem} activeOpacity={0.75}>
            <View style={[styles.actionIconHolder, { backgroundColor: Colors.primaryLightest }]}>
              <DollarSign size={22} color={Colors.primaryLight} />
            </View>
            <Text style={styles.actionName}>Pay Money</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem} activeOpacity={0.75}>
            <View style={[styles.actionIconHolder, { backgroundColor: Colors.successLight }]}>
              <ArrowUpRight size={22} color={Colors.success} />
            </View>
            <Text style={styles.actionName}>Loan Request</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionItem}
            activeOpacity={0.75}
            onPress={() => onNavigate('Messages')}
          >
            <View style={[styles.actionIconHolder, { backgroundColor: Colors.orangeLight }]}>
              <MessageSquare size={22} color={Colors.orange} />
            </View>
            <Text style={styles.actionName}>Chat Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem} activeOpacity={0.75}>
            <View style={[styles.actionIconHolder, { backgroundColor: Colors.purpleLight }]}>
              <Briefcase size={22} color={Colors.purple} />
            </View>
            <Text style={styles.actionName}>Finance Hub</Text>
          </TouchableOpacity>
        </View>

        {/* Credit History Line Chart Section */}
        <View style={styles.chartHistoryCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartHeaderTitle}>Credit Score History</Text>
          </View>

          <View style={styles.chartContainer}>
            <Svg width={width - 80} height="165" viewBox="0 0 300 165">
              <Defs>
                <LinearGradient id="chartLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <Stop offset="0%" stopColor={Colors.primaryLight} stopOpacity="0.3" />
                  <Stop offset="100%" stopColor={Colors.primaryLight} stopOpacity="0.0" />
                </LinearGradient>
              </Defs>

              {/* Y-Axis Labels */}
              <SvgText x="10" y="24" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700">850</SvgText>
              <SvgText x="10" y="52" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700">800</SvgText>
              <SvgText x="10" y="80" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700">750</SvgText>
              <SvgText x="10" y="108" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700">700</SvgText>
              <SvgText x="10" y="136" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700">650</SvgText>

              {/* Grid Lines */}
              <Path d="M 38 20 L 290 20" stroke={Colors.borderLight} strokeWidth="1" strokeDasharray="3 3" />
              <Path d="M 38 48 L 290 48" stroke={Colors.borderLight} strokeWidth="1" strokeDasharray="3 3" />
              <Path d="M 38 76 L 290 76" stroke={Colors.borderLight} strokeWidth="1" strokeDasharray="3 3" />
              <Path d="M 38 104 L 290 104" stroke={Colors.borderLight} strokeWidth="1" strokeDasharray="3 3" />
              <Path d="M 38 132 L 290 132" stroke={Colors.borderLight} strokeWidth="1" strokeDasharray="3 3" />

              {/* Fill area beneath the curve */}
              <Path
                d="M 45 132 C 85 110, 115 75, 145 85 C 185 95, 225 35, 255 40 C 270 42, 280 65, 285 70 L 285 132 L 45 132 Z"
                fill="url(#chartLineGrad)"
              />

              {/* Score curve line */}
              <Path
                d="M 45 132 C 85 110, 115 75, 145 85 C 185 95, 225 35, 255 40 C 270 42, 280 65, 285 70"
                fill="none"
                stroke={Colors.primaryLight}
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Data point circles */}
              <Circle cx="145" cy="85" r="4.5" fill={Colors.primaryLight} stroke={Colors.white} strokeWidth="1.5" />
              <Circle cx="255" cy="40" r="5" fill={Colors.primaryLight} stroke={Colors.white} strokeWidth="2" />
              <Circle cx="285" cy="70" r="4.5" fill={Colors.primaryLight} stroke={Colors.white} strokeWidth="1.5" />

              {/* X-Axis Labels (Months) */}
              <SvgText x="45" y="158" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700" textAnchor="middle">Jan</SvgText>
              <SvgText x="93" y="158" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700" textAnchor="middle">Feb</SvgText>
              <SvgText x="141" y="158" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700" textAnchor="middle">Mar</SvgText>
              <SvgText x="189" y="158" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700" textAnchor="middle">Apr</SvgText>
              <SvgText x="237" y="158" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700" textAnchor="middle">May</SvgText>
              <SvgText x="285" y="158" fill={Colors.textPlaceholder} fontSize="10" fontWeight="700" textAnchor="middle">Jun</SvgText>
            </Svg>
          </View>
        </View>

        {/* Utilisation ! Card */}
        <View style={styles.utilisationCard}>
          <View style={styles.circularProgressContainer}>
            <Svg width={46} height={46} viewBox="0 0 46 46">
              {/* Background circle */}
              <Circle
                cx="23"
                cy="23"
                r="18"
                fill="none"
                stroke={Colors.borderLight}
                strokeWidth="4"
              />
              {/* Foreground circle (33%) */}
              <Circle
                cx="23"
                cy="23"
                r="18"
                fill="none"
                stroke={Colors.success}
                strokeWidth="4"
                strokeDasharray="113.1"
                strokeDashoffset="75.8"
                strokeLinecap="round"
                transform="rotate(-90 23 23)"
              />
            </Svg>
            <View style={styles.progressTextWrapper}>
              <Text style={styles.progressText}>33%</Text>
            </View>
          </View>
          <View style={styles.utilisationTexts}>
            <Text style={styles.utilisationTitle}>Utilisation !</Text>
            <Text style={styles.utilisationSubtitle}>
              Keeping credit utilization below 40% is Good for your score
            </Text>
          </View>
        </View>

        {/* Credit Factors Section */}
        <View style={styles.factorsSection}>
          <Text style={styles.factorsTitle}>Credit Factors</Text>
          <Text style={styles.factorsSubtitle}>Factors that effects your CIBIL Score</Text>

          {/* Factor 1: Payment History */}
          <View style={styles.factorCard}>
            <View style={[styles.factorIconContainer, { backgroundColor: '#FFF7ED' }]}>
              <Clock size={20} color="#F97316" />
            </View>
            <View style={styles.factorTexts}>
              <Text style={styles.factorName}>Payment History</Text>
              <Text style={styles.factorDescription}>
                Timely EMI and bill payments improve your score. Missed or late payments can lower it quickly.
              </Text>
            </View>
          </View>

          {/* Factor 2: Credit Utilisation */}
          <View style={styles.factorCard}>
            <View style={[styles.factorIconContainer, { backgroundColor: '#EFF6FF' }]}>
              <Compass size={20} color="#2563EB" />
            </View>
            <View style={styles.factorTexts}>
              <Text style={styles.factorName}>Credit Utilisation</Text>
              <Text style={styles.factorDescription}>
                Using over 30% of your credit limit shows...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Plus color={Colors.white} size={24} />
      </TouchableOpacity>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="Home" onNavigate={onNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 10,
  },
  scrollContent: {
    paddingBottom: 140,
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
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  greetingSub: {
    fontSize: 14,
    color: Colors.textSubtle,
    fontWeight: '600',
    marginTop: 2,
  },
  bellButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.sm,
  },
  bellBadge: {
    position: 'absolute',
    top: 13,
    right: 13,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.error,
  },
  gaugeCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    marginHorizontal: 24,
    padding: 24,
    alignItems: 'center',
    ...Shadows.md,
    marginBottom: 20,
  },
  gaugeStateText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.success,
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
    color: Colors.textPrimary,
    letterSpacing: -1.5,
  },
  ptsAddedText: {
    fontSize: 14,
    color: Colors.success,
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
    color: Colors.textSubtle,
  },
  updateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceSecondary,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
  },
  updateIcon: {
    marginRight: 4,
  },
  updateDateText: {
    fontSize: 11,
    color: Colors.textSubtle,
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
    color: Colors.textTertiary,
    textAlign: 'center',
  },
  chartHistoryCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    marginHorizontal: 24,
    padding: 24,
    ...Shadows.md,
  },
  chartHeader: {
    marginBottom: 16,
  },
  chartHeaderTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.textPrimary,
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
    color: Colors.textPlaceholder,
    fontWeight: '700',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 90,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.blueStrong,
  },
  utilisationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    marginHorizontal: 24,
    padding: 18,
    marginTop: 20,
    ...Shadows.md,
  },
  circularProgressContainer: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  progressTextWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  utilisationTexts: {
    flex: 1,
  },
  utilisationTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  utilisationSubtitle: {
    fontSize: 11,
    color: Colors.textSubtle,
    lineHeight: 15,
    fontWeight: '600',
  },
  factorsSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  factorsTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  factorsSubtitle: {
    fontSize: 12,
    color: Colors.textSubtle,
    marginTop: 2,
    marginBottom: 12,
    fontWeight: '600',
  },
  factorCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: 16,
    marginBottom: 12,
    ...Shadows.sm,
  },
  factorIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  factorTexts: {
    flex: 1,
  },
  factorName: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  factorDescription: {
    fontSize: 11,
    color: Colors.textSubtle,
    lineHeight: 15,
    fontWeight: '600',
  },
});
