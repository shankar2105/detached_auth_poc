declare module NodeJS  {
    interface Global {
        port: number,
        preloadFile : string,
        appDir : string,
        isCI : boolean,
        startedRunningMock : boolean,
        shouldStartAsMockFromFlagsOrPackage : boolean,
        isRunningSpectronTestProcessingPackagedApp : boolean,
        SAFE_NODE_LIB_PATH : string,
        SPECTRON_TEST : boolean
    }
}
