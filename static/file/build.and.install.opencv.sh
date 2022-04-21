#!/bin/bash 

cvVersion="master"
PipArg="-i https://mirrors.ustc.edu.cn/pypi/web/simple "
if [ "$http_proxy" ]; then
    PipArg=$PipArg" --proxy "$http_proxy
fi
pre=""

while [ $# -ge 2 ];
do 
    case "$1" in 
        --cvversion) cvVersion=$2 ; shift 2;;
        --pippkg) PipArg="--no-index -f $2" ; shift 2;;
        --pre) pre=$2; shift 2;;
        *) echo "unknown parameter $1"; exit 1; break;;
    esac
done

echo "============================"
echo "cvVersion: $cvVersion"
echo "PipArg: $PipArg"
echo "doPrepare: $pre"
echo "============================"

cwd=$(pwd)
venvname=py3venv_build_opencv-"$cvVersion"

if [ ! "$pre" ]; then
    ## Update Packages
    sudo apt -y update
    sudo apt -y upgrade
    
    sudo apt -y remove x264 libx264-dev
     
    ## Install dependencies
    sudo apt -y install build-essential checkinstall cmake pkg-config yasm
    sudo apt -y install git gfortran
    sudo apt -y install libjpeg8-dev libjasper-dev libpng12-dev
     
    sudo apt -y install libtiff5-dev
     
    sudo apt -y install libtiff-dev
     
    sudo apt -y install libavcodec-dev libavformat-dev libswscale-dev libdc1394-22-dev
    sudo apt -y install libxine2-dev libv4l-dev
    cd /usr/include/linux
    sudo ln -s -f ../libv4l1-videodev.h videodev.h
    cd $cwd
     
    sudo apt -y install libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev
    sudo apt -y install libgtk2.0-dev libtbb-dev qt5-default
    sudo apt -y install libatlas-base-dev
    sudo apt -y install libfaac-dev libmp3lame-dev libtheora-dev
    sudo apt -y install libvorbis-dev libxvidcore-dev
    sudo apt -y install libopencore-amrnb-dev libopencore-amrwb-dev
    sudo apt -y install libavresample-dev
    sudo apt -y install x264 v4l-utils
     
    # Optional dependencies
    sudo apt -y install libprotobuf-dev protobuf-compiler
    sudo apt -y install libgoogle-glog-dev libgflags-dev
    sudo apt -y install libgphoto2-dev libeigen3-dev libhdf5-dev doxygen
    
    ## Install Python Libraries
    sudo apt -y install python3-dev python3-pip
    sudo -H pip3 install -i https://mirrors.ustc.edu.cn/pypi/web/simple --proxy http://proxysz.zte.com.cn:80 -U pip numpy
    sudo apt -y install python3-testresources
    
    # create virtual environment
    cd $cwd
    if [ ! -d $venvname ]; then
        python3 -m venv $venvname
    fi 
    source "$cwd"/$venvname/bin/activate
    pip install $PipArg -U pip
    pip install $PipArg wheel numpy scipy matplotlib scikit-image scikit-learn ipython dlib
    deactivate
    
    ## Download scr
    if [ ! -d "opencv.git" ]; then
        git clone https://github.com/opencv/opencv.git opencv.git
    fi 
    cd opencv.git
    git checkout $cvVersion
    cd ..
    
    if [ ! -d "opencv_contrib.git" ]; then
        git clone https://github.com/opencv/opencv_contrib.git opencv_contrib.git
    fi
    cd opencv_contrib.git
    git checkout $cvVersion
    cd ..

fi

cd opencv.git
if [ ! -d "build" ]; then
    mkdir build
fi
cd build
starttime=`date +'%Y-%m-%d %H:%M:%S'`
opts="-D CMAKE_BUILD_TYPE=RELEASE \
      -D CMAKE_INSTALL_PREFIX=$cwd/installation/OpenCV-"$cvVersion" \
      -D WITH_QT=ON \
      -D WITH_TBB=ON \
      -D WITH_V4L=ON \
      -D WITH_PNG=ON \
      -D WITH_JPEG=ON \
      -D WITH_OPENGL=ON \
      -D BUILD_EXAMPLES=OFF \
      -D OPENCV_PYTHON3_INSTALL_PATH=$cwd/$venvname/lib/python3.5/site-packages \
      -D OPENCV_EXTRA_MODULES_PATH=../../opencv_contrib.git/modules \
      -D BUILD_opencv_world=OFF "
cmake $opts ..
make -j8
endtime=`date +'%Y-%m-%d %H:%M:%S'`
start_seconds=$(date --date="$starttime" +%s);
end_seconds=$(date --date="$endtime" +%s);
echo "本次运行时间： "$((end_seconds-start_seconds))"s"
make install
cd $cwd
