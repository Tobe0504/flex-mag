<?php

// custom functions
add_action('init', 'register_article');

function register_article(){
	register_post_type('articles', [
		'label' => 'Articles',
		'public' => true, 
		'capability_type' => 'post'
    ]);
};

register_article();

add_filter('cron_schedules', 'add_five_minute_interval');

function add_five_minute_interval($schedules){
    $schedules['5_minutes'] = array(
        'interval' => 60,
        'display' => __('Every 1 Minute')
    );
    return $schedules;
}


if( !wp_next_scheduled('wp_ajax_get_articles_from_api') ){
    wp_schedule_event(time(), '1_minute', 'get_articles_from_api');
    error_log("The function is being run again");
};

add_action('wp_ajax_nopriv_get_articles_from_api', 'get_articles_from_api');
add_action('wp_ajax_get_articles_from_api', 'get_articles_from_api');

// 

function get_articles_from_api(){


$file = get_stylesheet_directory() . '/report.txt';

// $current_page = 10;
$current_page = (!empty($_POST['current_page']) ) ? $_POST['current_page'] : 10;

$articles = [];

$api_url = 'https://content.api.pressassociation.io/v1/item?sort=issued:desc&sort=uri:asc&limit=100&offset='.$current_page .'&apikey=bba83rkvzevyy764bk9fu3e2';
$headers = array(
    'apikey' => 'bba83rkvzevyy764bk9fu3e2',
    'Accept' => 'application/json'
);

$ressults = wp_remote_retrieve_body(wp_remote_get($api_url));
file_put_contents($file, "Current page: " . $current_page. "\n\n", FILE_APPEND);
error_log("API Results: " . $ressults );

$ressults = json_decode($ressults);

if (!is_object($ressults) || !property_exists($ressults, 'item')) {
    return false;
}

$articles[] = $ressults->item;

foreach( $articles[0] as $article ){

    $article_slug = sanitize_title($article->headline . '-' . $article->uri);
    
    $existing_article = get_page_by_path($article_slug,'OBJECT', 'articles');


    // if( $existing_article === null ){
    $inserted_article = wp_insert_post([
        'post_name' => $article_slug, 
        'post_title' => $article_slug, 
        'post_type' => 'article',
        'post_status' => 'publish'
    ]);

    if(is_wp_error( $inserted_article )){
        continue;
    };


    $fillable = [
        'field_63f1f846187e1' => 'body_html',
        'field_63f1faa7187e2' => 'body_text',
        'field_63f1fb60187e3' => 'byline',
        'field_63f1fb71187e4' => 'description_html',
        'field_63f1fb83187e5' => 'description_text', 
        'field_63f1fb98187e6' => 'firstcreated',
        'field_63f1fbe2187e7' => 'headline',
        'field_63f1fbf7187e8' => 'issued',
        'field_63f1fc03187e9' => 'uri',
        'field_63f2ed048526d' => 'versioncreated',
        'field_63f2ed9dc57c7' => 'subject',
        'field_63f2ee2872601' => 'associations',
    ];

    foreach( $fillable as $key => $name ){
        update_field( $key, $article->$name, $inserted_article );
    };
// }
// else{
//   $existing_article_id = $existing_article->uri;
//   $existing_article_versioncreated = get_field('versioncreated', $existing_article_id);

//   if( $article->versioncreated >= $existing_article_versioncreated){
//     $fillable = [
//         'field_63f1f846187e1' => 'body_html',
//         'field_63f1faa7187e2' => 'body_text',
//         'field_63f1fb60187e3' => 'byline',
//         'field_63f1fb71187e4' => 'description_html',
//         'field_63f1fb83187e5' => 'description_text', 
//         'field_63f1fb98187e6' => 'firstcreated',
//         'field_63f1fbe2187e7' => 'headline',
//         'field_63f1fbf7187e8' => 'issued',
//         'field_63f1fc03187e9' => 'uri',
//         'field_63f2ed048526d' => 'versioncreated',
//         'field_63f2ed9dc57c7' => 'subject',
//         'field_63f2ee2872601' => 'associations',
//     ];

//     foreach( $fillable as $key => $name ){
//         update_field( $key, $article->$name, $existing_article_id );
//     };
//   };
    
// };

};

$current_page = $current_page + 10;
wp_remote_post( admin_url('admin-ajax.php?action=get_articles_from_api'), [
    'blocking' => false,
    'sslverify' => false,
    'body' => [
        'current_page' => $current_page;
    ],
]);


};

?>