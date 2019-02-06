<?php
add_action( 'rest_api_init',  function() {
    register_rest_field(
        'post',        // post type
        'post_meta',   // rest-apiに追加するキー
        array(
            'get_callback'  => function(  $object, $field_name, $request  ) {
                // 出力したいカスタムフィールドのキーをここで定義
                $meta_fields = array(
                    'price',
                );
                $meta = array();
                foreach ( $meta_fields as $field ) {
                    // バリデーションを一切してないので注意
                    $meta[ $field ] = get_post_meta( $object[ 'id' ], $field, true );
                }
                return $meta;
            },
            'update_callback' => null,
            'schema'          => null,
        )
    );
});


/**
* Rest Routes initialization class.
*/
class WP_Mail_REST_API {

    /**
        * Create the rest API routes.
        *
        * @access public
        * @return void
        */
    public function __construct() {
            
            add_action( 'rest_api_init', function(){
                    register_rest_route( 'mail/v1', 'send', array(
                            'methods'  => array( 'get', 'post' ),
                            'callback' => array( $this, 'send_email' ),
                            'permission_callback' => array( $this, 'permission_check' ),
                            'args'     => array(
                                    'to' => array(
                                            'required'    => true,
                                            'default'     => '', 
                                            'description' => 'Array or comma-separated list of email addresses to send message.',
                                            'type'        => 'string',
                                    ),
                                    'subject' => array(
                                            'required'    => true,
                                            'default'     => '', 
                                            'description' => 'Email subject',
                                            'type'        => 'string',
                                    ),
                                    'message' => array(
                                            'required'    => true,
                                            'default'     => '', 
                                            'description' => 'Message contents',
                                            'type'        => 'string',
                                    ),
                                    'headers' => array(
                                            'required'    => false,
                                            'default'     => '', 
                                            'description' => 'Additional headers.',
                                            'type'        => 'string',
                                    ),
                                    'attachments' => array(
                                            'required'    => false,
                                            'default'     => '', 
                                            'description' => 'Files to attach.',
                                            'type'        => 'string',
                                    ),
                            ),
                    ));
            });
    }
    
    
    /**
        * send_email function.
        * 
        * @access public
        * @param WP_REST_Request $request
        * @return void
        */
    public function send_email( WP_REST_Request $request ) {
            
            $to = $request['to'];
            $subject = $request['subject'];
            $message = $request['message'];
            $headers = $request['headers'];
            $attachments = $request['attachments'];
                    
            $response = wp_mail( $to, $subject, $message, $headers, $attachments );
            
            return rest_ensure_response( $response );
            
    
    }



    /**
        * Check whether the function is allowed to be run.
        *
        * Must have either capabilities to enact action, or a valid nonce.
        *
        * @param  [type] $data [description]
        * @return [type]       [description]
        */
    public function permission_check( $data ) {
            if ( ! current_user_can( 'manage_options' ) ) {
                    return new WP_Error( 'forbidden', 'You are not allowed to do that.', array( 'status' => 403 ) );
            }
            return true;
    }
    
}       
new WP_Mail_REST_API();