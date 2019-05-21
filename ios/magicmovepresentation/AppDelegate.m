/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import "KeyEventModule.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"magicmovepresentation"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (NSArray *)keyCommands
{
  return @[ [UIKeyCommand keyCommandWithInput:UIKeyInputRightArrow modifierFlags:0 action:@selector(rightPressed)],
            [UIKeyCommand keyCommandWithInput:UIKeyInputDownArrow modifierFlags:0 action:@selector(rightPressed)],
            [UIKeyCommand keyCommandWithInput:UIKeyInputLeftArrow modifierFlags:0 action:@selector(leftPressed)],
            [UIKeyCommand keyCommandWithInput:UIKeyInputUpArrow modifierFlags:0 action:@selector(leftPressed)],
            [UIKeyCommand keyCommandWithInput:@"0" modifierFlags:0 action:@selector(zeroPressed)],
            [UIKeyCommand keyCommandWithInput:@"1" modifierFlags:0 action:@selector(onePressed)],
            [UIKeyCommand keyCommandWithInput:@"2" modifierFlags:0 action:@selector(twoPressed)],
            [UIKeyCommand keyCommandWithInput:@"3" modifierFlags:0 action:@selector(threePressed)],
            [UIKeyCommand keyCommandWithInput:@"4" modifierFlags:0 action:@selector(fourPressed)],
            [UIKeyCommand keyCommandWithInput:@"5" modifierFlags:0 action:@selector(fivePressed)],
            [UIKeyCommand keyCommandWithInput:@"6" modifierFlags:0 action:@selector(sixPressed)],
            [UIKeyCommand keyCommandWithInput:@"7" modifierFlags:0 action:@selector(sevenPressed)],
            [UIKeyCommand keyCommandWithInput:@"8" modifierFlags:0 action:@selector(eightPressed)],
            [UIKeyCommand keyCommandWithInput:@"9" modifierFlags:0 action:@selector(ninePressed)]];
}

- (void)rightPressed
{
  [KeyEventModule keyEvent:@"RightArrow"];
  // NSLog(@"Enter pressed");
}

- (void)leftPressed
{
  [KeyEventModule keyEvent:@"LeftArrow"];
  // NSLog(@"Enter pressed");
}

- (void)zeroPressed
{
  [KeyEventModule keyEvent:@"0"];
}

- (void)onePressed
{
  [KeyEventModule keyEvent:@"1"];
}

- (void)twoPressed
{
  [KeyEventModule keyEvent:@"2"];
}

- (void)threePressed
{
  [KeyEventModule keyEvent:@"3"];
}

- (void)fourPressed
{
  [KeyEventModule keyEvent:@"4"];
}

- (void)fivePressed
{
  [KeyEventModule keyEvent:@"5"];
}

- (void)sixPressed
{
  [KeyEventModule keyEvent:@"6"];
}

- (void)sevenPressed
{
  [KeyEventModule keyEvent:@"7"];
}

- (void)eightPressed
{
  [KeyEventModule keyEvent:@"8"];
}

- (void)ninePressed
{
  [KeyEventModule keyEvent:@"9"];
}


@end
