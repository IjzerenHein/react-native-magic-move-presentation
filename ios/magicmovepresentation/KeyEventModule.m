#import <Foundation/Foundation.h>
#import "KeyEventModule.h"
#import <React/RCTLog.h>

KeyEventModule* globalInstance;

@implementation KeyEventModule {
  BOOL hasListeners;
}

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

- (instancetype)init
{
  self = [super init];
  
  if (self) {
    globalInstance = self;
  }
  return self;
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[
           @"keyEvent",
           ];
}

- (void)startObserving
{
  hasListeners = YES;
}

- (void)stopObserving
{
  hasListeners = NO;
}

- (void)emitEventWithName:(NSString*) name body:(NSObject*) body
{
  if (hasListeners) {
    [self sendEventWithName:name body:body];
  }
}

+ (void) keyEvent:(NSString*)name
{
  if (globalInstance != nil) {
    [globalInstance keyEvent:name];
  }
}

- (void) keyEvent:(NSString*)name
{
  [self emitEventWithName:@"keyEvent" body:name];
}

@end
