# PostHog Analytics Setup Report

## Summary

PostHog analytics has been integrated into the Recurrly mobile app (React Native / Expo). The integration covers user authentication events, subscription engagement tracking, screen navigation, and user identification. A PostHog dashboard with five insights has been created to monitor key user behaviours.

### Files Modified or Created

| File | Change |
|------|--------|
| `.env` | Added `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` environment variables |
| `app.config.js` | Created (replaces `app.json`); exposes PostHog config via `extra` block for `expo-constants` |
| `src/config/posthog.ts` | Created PostHog singleton; reads config from `expo-constants`; enables debug mode in dev |
| `app/_layout.tsx` | Wrapped app with `PostHogProvider`; added manual screen tracking via `usePathname` |
| `app/(auth)/sign-in.tsx` | Added `identify` + `user_signed_in` on success; `user_sign_in_failed` on error; MFA path covered |
| `app/(auth)/sign-up.tsx` | Added `identify` + `user_signed_up` on success; `user_sign_up_failed` on error |
| `app/(tabs)/settings.tsx` | Added `user_signed_out` capture and `posthog.reset()` on sign-out |
| `app/(tabs)/index.tsx` | Added `subscription_expanded` capture when a subscription card is expanded |
| `app/subscriptions/[id].tsx` | Added `subscription_viewed` capture on mount |

---

## Tracked Events

| Event Name | Description | File |
|------------|-------------|------|
| `user_signed_in` | Fired when a user successfully signs in (password or MFA) | `app/(auth)/sign-in.tsx` |
| `user_sign_in_failed` | Fired when a sign-in attempt fails; includes `error_message` | `app/(auth)/sign-in.tsx` |
| `user_signed_up` | Fired when a new user completes email verification and account creation | `app/(auth)/sign-up.tsx` |
| `user_sign_up_failed` | Fired when account creation fails; includes `error_message` | `app/(auth)/sign-up.tsx` |
| `user_signed_out` | Fired when a user signs out; identity is reset after | `app/(tabs)/settings.tsx` |
| `subscription_viewed` | Fired when the subscription detail screen mounts; includes `subscription_id` | `app/subscriptions/[id].tsx` |
| `subscription_expanded` | Fired when a subscription card is expanded on the home screen; includes `subscription_id`, `subscription_name` | `app/(tabs)/index.tsx` |

Screen views are also tracked automatically via `posthog.screen()` on every route change in `app/_layout.tsx`.

---

## PostHog Dashboard and Insights

**Dashboard:** [Analytics basics](https://us.posthog.com/project/364185/dashboard/1417177)

| Insight | Link |
|---------|------|
| Sign-up to Sign-in Conversion Funnel | https://us.posthog.com/project/364185/insights/HJKKfHYv |
| Daily Active Users (Sign-ins) | https://us.posthog.com/project/364185/insights/nYF7yEwh |
| Sign-in Failure Rate | https://us.posthog.com/project/364185/insights/0gtbfY6U |
| Subscription Engagement | https://us.posthog.com/project/364185/insights/O3WP75k1 |
| User Churn (Sign-outs) | https://us.posthog.com/project/364185/insights/UCPIz5aI |
