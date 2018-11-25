<?php
/** 
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information by
 * visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sddb0040328747');

/** MySQL database username */
define('DB_USER', 'sddbLTI2Mzc0');

/** MySQL database password */
define('DB_PASSWORD', 'Aj3ze&T6');

/** MySQL hostname */
define('DB_HOST', 'sddb0040328747.cgidb');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'lTr8`>RIF,A6A4n*uEI_$e_Yw}&S,deDVS~vWWCUY>-~u+7:i9}Dcy#8pLy!..1j');
define('SECURE_AUTH_KEY', 'XzfuEc>E {%o250pFzS,mO/E?yW=9L5ywC_=Y+,0Q-e71[0k,{mnvning;kdk/Jj');
define('LOGGED_IN_KEY', '-Qo25g(EkB#zDXBPyJ~IA(?qq>&qS7C!AQX)MLgw_v,P}QJu^UH>^J8j}p?BY)P<');
define('NONCE_KEY', '41:ShQ7Xsa!8K*z4<Tr<DWTTRA@!p$#V6yT[>6(#!E,83_&FyuZW<^d28W*2>=ci');
define('AUTH_SALT', 'kQ`Y$-NlWS#Cb*u:J|w~-O_*9Oq3m;7[0SORXClrTrJ3m$87|2]}-9V*BI{_2*HM');
define('SECURE_AUTH_SALT', 'j->s LU^Y9r0a5>TmxAY~T-C-aW3<`()[Ds5YL0Ey~!`B.6<:^NKOy6RWTS&8N9e');
define('LOGGED_IN_SALT', 'o;J9^q_h%sJ[trDsGTgDE(3mOd#Ounq,g:`P3BO#ff=+LaG=>L.waZ4*G6;~Q[@=');
define('NONCE_SALT', '5s=oBQCFq})8D@=@EoiL_6=u~`D@&Ee];P1_]mWWw^4MCQdh|g}.ZD-L~,}n+5<n');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ac_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
