package com.aleksefo.hiitimer;

// Splash
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HIITimer";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        RNBootSplash.show(R.drawable.bootsplash, MainActivity.this);
    }
}
