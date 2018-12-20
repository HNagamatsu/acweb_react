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