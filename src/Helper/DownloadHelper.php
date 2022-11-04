<?php
/*
 * Andreas Lagocki - Photographer
 *
 * Copyright (C) Andreas Lagocki  - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly
 *  prohibited Proprietary and confidential.
 *
 * @author Andreas Lagocki <andreas@lagocki.de>
 */

namespace App\Helper;

class DownloadHelper
{

    public function downloadFiles(string $filename): void
    {
        if(is_file($filename))
        {
            // required for IE
            if(ini_get('zlib.output_compression')) { ini_set('zlib.output_compression', 'Off'); }

            // get the file mime type using the file extension
            switch(strtolower(substr(strrchr($filename,'.'),1)))
            {
                case 'pdf': $mime = 'application/pdf'; break;
                case 'zip': $mime = 'application/zip'; break;
                case 'jpeg':
                case 'jpg': $mime = 'image/jpg'; break;
                case 'png': $mime = 'image/png'; break;
                default: $mime = 'application/force-download';
            }
            header('Pragma: public');   // required
            header('Expires: 0');       // no cache
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Cache-Control: private',false);
            header('Content-Type: '.$mime);
            header('Content-Disposition: attachment; filename="'.basename($filename).'"');
            header('Content-Transfer-Encoding: binary');
            header('Content-Length: '.filesize($filename));    // provide file size
            readfile($filename);       // push it out
        } else {
            throw new \Exception('is_file fehlgeschlagen!');
        }
    }
}