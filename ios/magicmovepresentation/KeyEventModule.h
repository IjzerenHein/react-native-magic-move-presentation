#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface KeyEventModule : RCTEventEmitter <RCTBridgeModule>

+ (void) keyEvent:(NSString*) name;
- (void) keyEvent:(NSString*) name;

@end
