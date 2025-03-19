<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('customer_histories', function (Blueprint $table) {
            $table->binary('general')->change();
        });
    }

    public function down()
    {
        Schema::table('customer_histories', function (Blueprint $table) {
            $table->text('general')->change();
        });
    }
};